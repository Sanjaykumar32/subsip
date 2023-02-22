import { useAuth } from "context/auth.context";
import { useAppDispatch } from "data";
import { useNavigate } from "react-router-dom";
import { UserThunk } from "data/thunk/user.thunk";
import { useCallback } from "react";
import { AuthRoutePathEnum } from "enum";
import toast from "react-hot-toast";
import React from 'react'

export const SliderCard = (props: any) => {
    const { des, imgSrc, location, name, id, subscriberCount, subcriber } = props;
  
    const auth = useAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userId = localStorage.getItem("userId");
  
    const filters =
      subcriber &&
      subcriber?.filter((el: any) => {
        return el == userId;
      })[0];
  
  
    async function onImageClick(): Promise<void> {
      try {
        const response: any = await dispatch(
          UserThunk.business({ businessId: id })
        );
        if (response?.payload?.data?.length > 0) {
          navigate(`/listing/${name.replace(/\s+/g, "-")}`,
            { state: { businessId: id } }
          );
        } else {
          console.log("nodata");
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    const allBusiness = useCallback(async () => {
      try {
        await dispatch(UserThunk.business());
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);
  
    async function SubcribeBtn(): Promise<void> {
      !auth?.isAuthenticated && navigate(AuthRoutePathEnum.SIGN_IN);
      try {
        await dispatch(
          UserThunk.addSubscriberToBusiness({
            businessId: id,
            userId: userId ? userId : "",
            referredCode: null,
          })
        );
  
        allBusiness();
        toast.success("Subscribed Successfully");
      } catch (error) {
        console.log(error);
      }
    }
  
    const handleUnsub = async (id: any) => {
      await dispatch(
        UserThunk.UNSubscriberToBusiness({
          businessId: id ? "" + id : "0",
        })
      );
      allBusiness();
      toast.success("Unsubscribed  Successfully");
    };
  
    return (
      <div className="w-full mx-auto  md:mx-5 relative max-w-[307px] bg-white  border-[1px] border-[#DADDE5] ">
        <img
          src={imgSrc}
          alt="image"
          className="w-full object-cover h-[215px]  cursor-pointer "
          onClick={onImageClick}
        />
        <div className=" pl-4 py-4 h-[230px] ">
          <span
            className="text-black text-[19px] leading-[22px] font-semibold cursor-pointer textLimit2 my-3 "
            onClick={() => {
              onImageClick();
            }}
          >
            {name}
          </span>
          <p className="text-[0.9rem] text-[#09292B] leading-[22px] font-semibold ">
            {location ? location : " "}
          </p>
          <p className="text-[1rem] leading-[24px] text-ellipsis text-[#434d59] textLimit2 my-3 ">
            {des ? des : "--"}
          </p>
          <div className="flex justify-between my-2 pt-[1em] absolute bottom-[14px] right-0  w-[95%]">
            <p className="text-[0.9rem] text-[#CDCDCD]">
              <span className="text-[20px] text-black pr-2">
                {" "}
                {subscriberCount ? subscriberCount : " "}{" "}
              </span>
              {subscriberCount ? "subscribers" : " "}
            </p>
  
            <div className="raletive cursor-pointer ">
              {filters == userId && auth?.isAuthenticated ? (
                <div
                  className="subscribeLebalListing bg-[#e0e0e0] "
                  onClick={() => handleUnsub(id)}
                >
                  <span className=" text-[#262626] font-medium">
                    {" "}
                    Unsubscribe
                  </span>
                </div>
              ) : (
                <div
                  className="subscribeLebalListing bg-[#09292b]"
                  onClick={SubcribeBtn}
                >
                  <span className=" text-white font-medium"> Subscribe</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };