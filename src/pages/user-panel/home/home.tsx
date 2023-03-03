import React, { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "data";
import {
  GET_BANNER_LIST,
  GET_BUSINESS,
  GET_CATEGORY,
  GET_USER_NOTIFICTAION,
} from "data/selectors";
import { useAuth } from "context/auth.context";
import { AuthRoutePathEnum, RoutePathEnum } from "enum";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { IBannerData, IBusiness } from "interface";
import { UserThunk } from "data/thunk/user.thunk";
import { Button } from "@mui/material";
import { AdminThunk } from "data/thunk/admin.thunk";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import toast from "react-hot-toast";
import ScrollToTop from "scrollTop";
import {
  CircularProgress,
} from "@mui/material";
import { SliderArrow } from "./sliderArrow";
import { SliderCard } from "./sliderCard";


export function Home({ alertOnBottom }: any) {
  const location = useLocation();
  const theme = useTheme();
  const [showMoreData, setMoreData] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scroll, setScroll] = useState(false);
  const settings: any = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    lazyLoad: true,
    autoplay: true,
    speed: isMobile ? 300 : 700,
    adaptiveHeight: true,
  };

  const cardSettings: any = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    cssEase: "linear",
    lazyLoad: true,
    autoplay: false,
    speed: isMobile ? 300 : 700,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '60px',
          autoplay: false,
        },
      },
    ],
  };


  const sliderRef = useRef<Slider>(null);
  const cardRef = useRef<Slider>(null);
  const cardRef2 = useRef<Slider>(null);
  const cardRef3 = useRef<Slider>(null);

  const dispatch = useAppDispatch();
  const auth = useAuth();
  const navigate = useNavigate();
  const bannerData = useAppSelector(GET_BANNER_LIST);

  const bannerList = useCallback(async () => {
    try {
      await dispatch(UserThunk.bannerList());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    bannerList();
  }, [bannerList]);

  const businessData = useAppSelector(GET_BUSINESS);

  const banner = businessData?.filter((el: any) =>
    bannerData.map((item) => item.iBusinessId)?.includes(el?.iBusinessId)
  );

  const filterBanner = businessData?.filter((item) => {
    return Object.values(
      item?.vLocation?.toString()?.replaceAll(/\s/g, "")?.toLowerCase()
    )
      .join("")
      .toLowerCase()
      .includes(
        location?.search
          ?.toString()
          ?.slice(1, 19)
          ?.replaceAll(/\s/g, "")
          ?.toLowerCase()
      );
  });

  const categoryData = useAppSelector(GET_CATEGORY);
  const CateFirst = categoryData.map((item: any) => item?.iCategoryId);
  const moreData = categoryData.map((item: any) => item?.vName)
  const userId = localStorage.getItem("userId");

  const getcategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getcategory();
  }, [getcategory]);

  const allBusiness = useCallback(async () => {
    try {
      await dispatch(UserThunk.business());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    allBusiness();
  }, [allBusiness]);

  const handleMoreData = () => {
    setMoreData(true);
  };

  const handleLessData = () => {
    setMoreData(false);
  };
  const locatiosn = useLocation();

  async function onImageClick(name: string, id: any): Promise<void> {
    try {
      const response: any = await dispatch(
        UserThunk.business({ businessName: name })
      );
      if (response.payload.data.length > 0) {
        navigate(`/listing/${name.replace(/\s+/g, "-")}`,
          { state: { businessId: id } }
        );
      } else {
        console.log("nodata");
      }
    } catch (error) {
      console.log(error);
    }
  }2

  const handleOnDocumentBottom = useCallback(() => {
    setScroll(true);
  }, [alertOnBottom]);

  useBottomScrollListener(handleOnDocumentBottom);


  return (
    <>
      <ScrollToTop />
      <div className="w-full overflow-x-hidden">
        <div
          className={`${isMobile ? "py-10" : "py-20"
            } 'bg-white md:bg-black relative  w-full'`}
        >
          <Slider ref={sliderRef} {...settings}>
            {banner?.map((ele: any, index: number) => (
              <div key={index}>
                <div className="max-w-[100%]   lg:max-w-[80%] xl:max-w-[70%] gap-5 min-h-[300px] mx-auto flex flex-col-reverse md:flex-row justify-between px-5 lg:px-0 relative">
                  <div className="w-[80%] md:w-[45%] gap-4 flex flex-col justify-center px-2 lg:pt-10 md:px-10">
                    <div>
                      <span className="bg-[#0275d8] rounded-[7px] text-[0.9rem] py-[5px] px-[10px] font-normal text-white">
                        Featured
                      </span>
                    </div>

                    <div>
                      <span
                        className="text-black md:text-white text-[1.6rem] font-semibold cursor-pointer sliderTitle"
                        onClick={() => {
                          onImageClick(ele.vName, ele.iBusinessId);
                          // auth?.isAuthenticated
                          //   ? onImageClick(ele.iBusinessId)
                          //   : navigate(AuthRoutePathEnum.SIGN_IN);
                        }}
                      >
                        {ele.vName}
                      </span>
                    </div>
                    <p className=" text-black md:text-[#bdbdbd] text-[1rem] ">
                      {ele.vLocation}
                    </p>
                    <p className="text-black md:text-white text-[1.1rem] textLimit2 font-normal">
                      {ele?.tDescription}
                    </p>
                    <p
                      className={`${isMobile
                        ? "text-black text-[16px] font-medium"
                        : "text-[#ffff] text-[16px] font-medium"
                        }`}
                    >
                      {ele?.subscriberCount} Subscribers
                    </p>

                    <div className="raletive">
                      <>
                        {ele?.subscriberIds &&
                          ele?.subscriberIds.split(",").filter((el: any) => {
                            return el == userId;
                          })[0] &&
                          auth?.isAuthenticated ? (
                          // <div
                          //   className="subscribeLebalListing bg-[#e0e0e0]"
                          //   onClick={() =>
                          //     handleUnsub(data?.iBusinessId)
                          //   }
                          // >
                          //   <span className=" text-[#262626] font-medium">
                          //     {" "}
                          //     Unsubscribe
                          //   </span>
                          // </div>
                          <span>
                            <button
                              className="bg-[#e0e0e0] text-[#262626]  text-[1rem] w-36 rounded-full  py-4 px-2 font-medium"
                              onClick={() => {
                                auth?.isAuthenticated
                                  ? onImageClick(ele?.vName, ele?.iBusinessId)
                                  : navigate(AuthRoutePathEnum.SIGN_IN);
                              }}
                            >
                              Subscribed
                            </button>
                          </span>
                        ) : (
                          // <div
                          //   className="subscribeLebalListing bg-[#09292b]"
                          //   onClick={() =>
                          //     SubcribeBtn(data?.iBusinessId)
                          //   }
                          // >
                          //   <span className=" text-white ">
                          //     Subscribe
                          //   </span>
                          // </div>
                          <span>
                            <button
                              className="bg-[#ACCF02] text-[1rem] w-36 rounded-full  py-4 px-2 font-medium text-white"
                              onClick={() => {
                                auth?.isAuthenticated
                                  ? onImageClick(ele?.vName, ele?.iBusinessId)
                                  : navigate(AuthRoutePathEnum.SIGN_IN);
                              }}
                            >
                              Subscribe
                            </button>
                          </span>
                        )}
                      </>
                    </div>
                    {/* <span>
                    <button
                      className="bg-[#d32f3f] text-[1rem] w-36 rounded-full  py-4 px-2 font-normal text-white"
                      onClick={() => {
                        auth?.isAuthenticated
                          ? onImageClick(ele.iBusinessId)
                          : navigate(AuthRoutePathEnum.SIGN_IN);
                      }}
                    >
                      Subscribe Now
                    </button>
                  </span> */}
                  </div>
                  <div className="  relative md:min-h-[375px] md:h-[200px] md:max-h-[calc(100vh-25rem)] w-full  md:w-[60%] flex justify-center items-center">
                    <img
                      src={
                        ele?.vImage
                          ? "https://api.subsip.com/" + ele?.vImage
                          : "https://api.subsip.com/public/uploads/1672076769972.png"
                      }
                      className={`${isMobile ? "h-[266px]  rounded-[7px]" : "h-full"
                        } w-full object-cover object-center rounded-[7px] `}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {!isMobile && bannerData.length > 0 && (
            <SliderArrow bannerType="MainBanner" refVal={sliderRef} />
          )}
        </div>

        {/* {loader ? */}
        {/* <div className="flex justify-center">
          <CircularProgress />
        </div> */}


        <div className={`${!isMobile ? "mt-8" : ""} w-full px-5 `}>
 

        {filterBanner?.filter(
              (el) => parseInt(el?.iCategory) == CateFirst[0]
            ).length > 0 && 
            <>
          <p className="font-semibold text-[24px]  mt-5 mx-5">
          Restaurants
          </p>

          <div className="relative my-2 mb-5 w-full iner-slider">
            <Slider ref={cardRef3} {...cardSettings}>
              {filterBanner
                ?.filter((el) => parseInt(el?.iCategory) == CateFirst[0])
                ?.map((ele, index) => {
                  return (
                    <div
                      style={{
                        boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                      }}
                      key={`${ele?.categoryName}+${index}`}
                      className="relative overflow-x-auto md:overflow-x-hidden "
                    >
                      <SliderCard
                        imgSrc={"https://api.subsip.com/" + ele?.vImage}
                        name={ele?.vName}
                        tagLine={ele?.vTagLine}
                        des={ele?.tDescription}
                        location={ele?.vLocation}
                        id={ele?.iBusinessId}
                        subscriberCount={ele?.subscriberCount}
                        subcriber={
                          ele?.subscriberIds && ele?.subscriberIds.split(",")
                        }
                      />
                    </div>
                  );
                })}
            </Slider>
            {filterBanner?.filter(
              (el) => parseInt(el.iCategory) == CateFirst[0]
            ).length > 0 && <SliderArrow refVal={cardRef3} />}
          </div>
          </>}


          {filterBanner?.filter(
              (el) => parseInt(el.iCategory) == CateFirst[1]
            ).length > 0 && 
            <>
          <p className="font-semibold text-[24px]  mt-5 mx-5">
          Home Services
          </p>
          <div className="relative my-2 mb-5 w-full iner-slider">
            <Slider ref={cardRef2} {...cardSettings}>
              {filterBanner
                ?.filter((el) => parseInt(el?.iCategory) == CateFirst[1])
                ?.map((ele: IBusiness, index: number) => {
                  return (
                    <div
                      style={{
                        boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                      }}
                      key={`${ele.dLatitude}+${index}`}
                      className="relative overflow-x-auto md:overflow-x-hidden "
                    >
                      <SliderCard
                        imgSrc={"https://api.subsip.com/" + ele?.vImage}
                        name={ele?.vName}
                        tagLine={ele?.vTagLine}
                        des={ele?.tDescription}
                        location={ele?.vLocation}
                        id={ele.iBusinessId}
                        subscriberCount={ele.subscriberCount}
                        subcriber={
                          ele?.subscriberIds && ele?.subscriberIds.split(",")
                        }
                      />
                    </div>
                  );
                })}
            </Slider>
            {filterBanner?.filter(
              (el) => parseInt(el.iCategory) == CateFirst[1]
            ).length > 0 && <SliderArrow refVal={cardRef2} />}
          </div>
          </>}



          {filterBanner?.filter(
              (el) => parseInt(el.iCategory) == CateFirst[2]
            ).length > 0 && 
            <>
          <p className="font-semibold text-[24px]  mt-5 mx-5">
           Auto Services
          </p>

          <div className="relative my-2 mb-5 w-full iner-slider">
            <Slider ref={cardRef3} {...cardSettings}>
              {filterBanner
                ?.filter((el) => parseInt(el.iCategory) == CateFirst[2])
                ?.map((ele, index) => {
                  return (
                    <div
                      style={{
                        boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                      }}
                      key={`${ele.categoryName}+${index}`}
                      className="relative overflow-x-auto md:overflow-x-hidden "
                    >
                      <SliderCard
                        imgSrc={"https://api.subsip.com/" + ele?.vImage}
                        name={ele?.vName}
                        tagLine={ele?.vTagLine}
                        des={ele?.tDescription}
                        location={ele?.vLocation}
                        id={ele.iBusinessId}
                        subscriberCount={ele.subscriberCount}
                        subcriber={
                          ele?.subscriberIds && ele?.subscriberIds.split(",")
                        }
                      />
                    </div>
                  );
                })}
            </Slider>
            {filterBanner?.filter(
              (el) => parseInt(el.iCategory) == CateFirst[2]
            ).length > 0 && <SliderArrow refVal={cardRef3} />}
          </div>
          </>}

          {/* More data show */}

          {/* {scroll ? ( */}
            <>
                {filterBanner?.filter(
                  (el) => parseInt(el.iCategory) == CateFirst[3]
                ).length > 0 && 
                <>
              <p className="font-semibold text-[24px]  mt-5 mx-5">
              {moreData[3]}
              </p>
              <div className="relative my-10 w-full iner-slider">
                <Slider ref={cardRef3} {...cardSettings}>
                  {filterBanner
                    ?.filter((el) => parseInt(el.iCategory) == CateFirst[3])
                    ?.map((ele, index) => {
                      return (
                        <div
                          style={{
                            boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                          }}
                          key={`${ele.categoryName}+${index}`}
                          className="relative overflow-x-auto md:overflow-x-hidden "
                        >
                          <SliderCard
                            imgSrc={"https://api.subsip.com/" + ele?.vImage}
                            name={ele?.vName}
                            tagLine={ele?.vTagLine}
                            des={ele?.tDescription}
                            location={ele?.vLocation}
                            id={ele.iBusinessId}
                            subscriberCount={ele.subscriberCount}
                            subcriber={
                              ele?.subscriberIds &&
                              ele?.subscriberIds.split(",")
                            }
                          />
                        </div>
                      );
                    })}
                </Slider>
                {filterBanner?.filter(
                  (el) => parseInt(el.iCategory) == CateFirst[3]
                ).length > 0 && <SliderArrow refVal={cardRef3} />}
              </div>
              </>}
   
              {filterBanner?.filter(
                  (el) => parseInt(el.iCategory) == CateFirst[4]
                ).length > 0 &&
                <>
              <p className="font-semibold text-[24px]  mt-5 mx-5">
                 {moreData[4]}
              </p>

              <div className="relative p-padding my-10 w-full iner-slider">
                <Slider ref={cardRef3} {...cardSettings}>
                  {filterBanner
                    ?.filter((el) => parseInt(el.iCategory) == CateFirst[4])
                    ?.map((ele, index) => {
                      return (
                        <div
                          style={{
                            boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                          }}
                          key={`${ele.categoryName}+${index}`}
                          className="relative overflow-x-auto md:overflow-x-hidden "
                        >
                          <SliderCard
                            imgSrc={"https://api.subsip.com/" + ele?.vImage}
                            name={ele?.vName}
                            tagLine={ele?.vTagLine}
                            des={ele?.tDescription}
                            location={ele?.vLocation}
                            id={ele.iBusinessId}
                            subscriberCount={ele.subscriberCount}
                            subcriber={
                              ele?.subscriberIds &&
                              ele?.subscriberIds.split(",")
                            }
                          />
                        </div>
                      );
                    })}
                </Slider>
                {filterBanner?.filter(
                  (el) => parseInt(el.iCategory) == CateFirst[4]
                ).length > 0 && <SliderArrow refVal={cardRef3} />}
              </div>
              </>}
            </>
          {/* // ) : null} */}


        </div>
      </div>
    </>
  );
}
