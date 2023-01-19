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


/**
 *
 */
export function Home() {
  const location = useLocation();
  const theme = useTheme();
  const [showMoreData, setMoreData] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const settings: any = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    lazyLoad: true,
    autoplay: true,
    speed: 700,
  };

  const cardSettings: any = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    cssEase: "linear",
    lazyLoad: true,
    autoplay: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };



  const cardSettingsScroll: any = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    cssEase: "linear",
    lazyLoad: true,
    autoplay: false,
    speed: 700,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
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

  const filterBanner = businessData.filter((item) => {
    return Object.values(item.vLocation.toString().toLowerCase())
      .join("")
      .toLowerCase()
      .includes(location.search.toString().slice(1, 19).toLowerCase());
  });

  console.log(filterBanner, "location.search.toString().slice(1, 19)");

  const categoryData = useAppSelector(GET_CATEGORY);
  const CateFirst = categoryData.map((item: any) => item?.iCategoryId);
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
  // const businessId = location.id;
  console.log(locatiosn, "location home ");

  async function onImageClick(id: number): Promise<void> {
    try {
      const response: any = await dispatch(
        UserThunk.business({ businessId: id })
      );
      if (response.payload.data.length > 0) {
        navigate(`/listing/${id}`);
      } else {
        console.log("nodata");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full overflow-x-hidden">
      <div className="py-16 bg-white md:bg-black relative  w-full">
        <Slider ref={sliderRef} {...settings}>
          {bannerData.map((ele: IBannerData, index: number) => (
            <div key={index}>
              <div className="max-w-[100%] mt-[-38px]  lg:max-w-[80%] xl:max-w-[70%] gap-5 min-h-[300px] mx-auto flex flex-col-reverse md:flex-row justify-between px-5 lg:px-0 relative">
                <div className="w-[80%] md:w-[45%] gap-5 flex flex-col justify-center px-2 lg:pt-10 md:px-10">
                  <div>
                    <span className="bg-[#0275d8] rounded-md text-[0.9rem] py-[5px] px-[10px] font-normal text-white">
                      Featured
                    </span>
                  </div>

                  <div>
                    <span
                      className="text-black md:text-white text-[1.6rem] font-semibold cursor-pointer sliderTitle"
                      onClick={() => {
                        auth?.isAuthenticated
                          ? onImageClick(ele.iBusinessId)
                          : navigate(AuthRoutePathEnum.SIGN_IN);
                      }}
                    >
                      {ele.vName}
                    </span>
                  </div>
                  <p className=" text-black md:text-[#bdbdbd] text-[0.8rem] ">
                    {ele.vLocation}
                  </p>
                  <p className="text-black md:text-white text-[0.95rem] textLimit2 font-normal">
                    {ele?.tDescription}
                  </p>
                  {/* <p className="text-[#0275d8]">{ele?.subscribers}</p> */}
                  <span>
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
                  </span>
                </div>
                <div className=" relative md:min-h-[353px] md:h-[200px] md:max-h-[calc(100vh-25rem)] w-full  md:w-[60%] flex justify-center items-center">
                  <img
                    src={
                      ele?.vImage
                        ? "http://159.223.194.50:8000/" + ele?.vImage
                        : "http://159.223.194.50:8000/public/uploads/1672076769972.png"
                    }
                    className="h-full w-full object-cover object-center rounded-[7px] "
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {!isMobile && bannerData.length > 0 && <SliderArrow bannerType='MainBanner' refVal={sliderRef} />}
      </div>

      <div className="w-full px-5 mt-8">
        <p className="font-semibold text-[1.2rem] pb-5">Seattle, WA</p>

        <div className="relative">
          <Slider ref={cardRef} {...cardSettingsScroll}>
            {filterBanner
              .filter((el) => parseInt(el.iCategory) == CateFirst[0])
              .map((ele: IBusiness, index: number) => {
                return (
                  <div
                    style={{
                      boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                    }}
                    key={`${ele.eStatus}+${index}`}
                    className="relative overflow-x-auto md:overflow-x-hidden "
                  >
                    <SliderCard
                      imgSrc={"http://159.223.194.50:8000/" + ele?.vImage}
                      name={ele?.vName}
                      tagLine={ele?.vTagLine}
                      des={ele?.tDescription}
                      location={ele?.vLocation}
                      id={ele.iBusinessId}
                      subscriberCount={ele.subscriberCount}
                    />
                  </div>
                );
              })}
          </Slider>
          {filterBanner.filter(
            (el: any) => parseInt(el.iCategory) == CateFirst[0]
          ).length > 0 && <SliderArrow refVal={cardRef} />}
        </div>

        <div className="relative mt-10 w-full">
          <Slider ref={cardRef2} {...cardSettings}>
            {filterBanner
              .filter((el) => parseInt(el.iCategory) == CateFirst[1])
              .map((ele: IBusiness, index: number) => {
                return (
                  <div
                    style={{
                      boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                    }}
                    key={`${ele.dLatitude}+${index}`}
                    className="relative overflow-x-auto md:overflow-x-hidden "
                  >
                    <SliderCard
                      imgSrc={"http://159.223.194.50:8000/" + ele?.vImage}
                      name={ele?.vName}
                      tagLine={ele?.vTagLine}
                      des={ele?.tDescription}
                      location={ele?.vLocation}
                      id={ele.iBusinessId}
                      subscriberCount={ele.subscriberCount}
                    />
                  </div>
                );
              })}
          </Slider>
          {filterBanner.filter((el) => parseInt(el.iCategory) == CateFirst[1])
            .length > 0 && <SliderArrow refVal={cardRef2} />}
        </div>

        <div className="relative my-10 w-full">
          <Slider ref={cardRef3} {...cardSettings}>
            {filterBanner
              .filter((el) => parseInt(el.iCategory) == CateFirst[2])
              .map((ele, index) => {
                return (
                  <div
                    style={{
                      boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                    }}
                    key={`${ele.categoryName}+${index}`}
                    className="relative overflow-x-auto md:overflow-x-hidden "
                  >
                    <SliderCard
                      imgSrc={"http://159.223.194.50:8000/" + ele?.vImage}
                      name={ele?.vName}
                      tagLine={ele?.vTagLine}
                      des={ele?.tDescription}
                      location={ele?.vLocation}
                      id={ele.iBusinessId}
                      subscriberCount={ele.subscriberCount}
                    />
                  </div>
                );
              })}
          </Slider>
          {filterBanner.filter((el) => parseInt(el.iCategory) == CateFirst[2])
            .length > 0 && <SliderArrow refVal={cardRef3} />}
        </div>

        {/* More data show */}
        {showMoreData ? (
          <>
            <div className="relative my-10 w-full">
              <Slider ref={cardRef3} {...cardSettings}>
                {filterBanner
                  .filter((el) => parseInt(el.iCategory) == CateFirst[3])
                  .map((ele, index) => {
                    return (
                      <div
                        style={{
                          boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                        }}
                        key={`${ele.categoryName}+${index}`}
                        className="relative overflow-x-auto md:overflow-x-hidden "
                      >
                        <SliderCard
                          imgSrc={"http://159.223.194.50:8000/" + ele?.vImage}
                          name={ele?.vName}
                          tagLine={ele?.vTagLine}
                          des={ele?.tDescription}
                          location={ele?.vLocation}
                          id={ele.iBusinessId}
                          subscriberCount={ele.subscriberCount}
                        />
                      </div>
                    );
                  })}
              </Slider>
              {filterBanner.filter(
                (el) => parseInt(el.iCategory) == CateFirst[3]
              ).length > 0 && <SliderArrow refVal={cardRef3} />}
            </div>

            <div className="relative my-10 w-full">
              <Slider ref={cardRef3} {...cardSettings}>
                {filterBanner
                  .filter((el) => parseInt(el.iCategory) == CateFirst[4])
                  .map((ele, index) => {
                    return (
                      <div
                        style={{
                          boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                        }}
                        key={`${ele.categoryName}+${index}`}
                        className="relative overflow-x-auto md:overflow-x-hidden "
                      >
                        <SliderCard
                          imgSrc={"http://159.223.194.50:8000/" + ele?.vImage}
                          name={ele?.vName}
                          tagLine={ele?.vTagLine}
                          des={ele?.tDescription}
                          location={ele?.vLocation}
                          id={ele.iBusinessId}
                          subscriberCount={ele.subscriberCount}
                        />
                      </div>
                    );
                  })}
              </Slider>
              {filterBanner.filter(
                (el) => parseInt(el.iCategory) == CateFirst[4]
              ).length > 0 && <SliderArrow refVal={cardRef3} />}
            </div>
          </>
        ) : null}

        {/* { && */}
        {filterBanner.filter(
          (el) => parseInt(el.iCategory) == CateFirst[2]
        ) && (
            <div className="moreBtn">
              {/* {console.log(CateFirst[3])} */}
              {showMoreData ? (
                <Button variant="contained" onClick={handleLessData}>
                  Less...
                </Button>
              ) : (
                <Button variant="contained" onClick={handleMoreData}>
                  Load More...
                </Button>
              )}
            </div>
          )}
      </div>
    </div>
  );
}

const SliderCard = (props: any) => {
  const { des, imgSrc, location, name, id, subscriberCount } = props;
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  async function onImageClick(): Promise<void> {
    try {
      const response: any = await dispatch(
        UserThunk.business({ businessId: id })
      );
      if (response.payload.data.length > 0) {
        navigate(`/listing/${id}`);
      } else {
        console.log("nodata");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onButtonClick(): Promise<void> {
    !auth?.isAuthenticated && navigate(AuthRoutePathEnum.SIGN_IN);
    try {
      await dispatch(
        UserThunk.addSubscriberToBusiness({
          businessId: id,
          userId: userId ? userId : "",
          referredCode: "dkfdhfjkh",
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full mx-auto  md:mx-5 relative max-w-[307px] bg-white  border-[1px] border-[#DADDE5] ">
      <img
        src={imgSrc}
        alt="image"
        className="w-full object-cover h-[215px]"
        onClick={onImageClick}
      />
      <div className=" pl-3 py-3  ">
        <span
          className="text-black text-[1.3rem] font-semibold cursor-pointer textLimit2 sliderTitle"
          onClick={() => {
            auth?.isAuthenticated
              ? onImageClick()
              : navigate(AuthRoutePathEnum.SIGN_IN);
          }}
        >
          {name}
        </span>
        <p className="text-[0.9rem] text-[#09292B] leading-[22px] font-semibold py-2">
          {location ? location : " "}
        </p>
        <p className="text-[1rem] leading-[24px] text-ellipsis text-[#434D59] textLimit2 py-2 pl-3 ">
          {des ? des : "--"}
        </p>
        <div className="flex justify-between">
          <p className="text-[0.9rem] text-[#CDCDCD]">
            <span className="text-[20px] text-black pr-2">
              {" "}
              {subscriberCount ? subscriberCount : " "}{" "}
            </span>
            {subscriberCount ? "subscribers" : " "}
          </p>

          <div className="raletive cursor-pointer " onClick={onButtonClick}>
            <div className="subscribeLebalListing">
              <span className=" text-white">Subscribe</span>
            </div>
          </div>

          {/* 
          <button
            className="bg-[#D32F3F] text-[0.9rem] w-36 rounded-full  py-2 px-1 font-normal text-white"
            onClick={onButtonClick}
          >
            {auth?.isAuthenticated ? "Subscribed" : "Subscribe Now"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

const SliderArrow = (props: any) => {
  return (
    <div
      className={` ${props.bannerType} w-full pointer-events-none z-50 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex px-5 justify-between  text-white font-normal `}
    >
      <SlArrowLeft
        onClick={() => props?.refVal?.current?.slickPrev()}
        className={`text-3xl md:text-4xl p-2 rounded-full bg-[#09292b] font-normal relative pointer-events-auto z-50 cursor-pointer `}
      />
      <SlArrowRight
        onClick={() => {
          props?.refVal?.current?.slickNext();
        }}
        className="text-3xl md:text-4xl p-2 rounded-full bg-[#09292b] font-normal relative z-50 pointer-events-auto cursor-pointer"
      />
    </div>
  );
};
