// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import {
//   Box,
//   Button,
//   Card,
//   Chip,
//   Container,
//   Grid,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { LocationCard1 } from "components/location/location-card-1";
// import {
//   Address,
//   Info,
//   Subscribe,
//   Title,
// } from "components/location/location-card";
// import { Spacing } from "components";
// import { useAuth } from "context/auth.context";

// export function Home() {
//   const data = {
//     image:
//       "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2881&q=80",
//     name: "India Gate Restaurant",
//     location: "Seattle,WA",
//     description:
//       "Welcome to the India Gate Restaurant where we offer unique food.",
//     subscribers: "46.2K subscribers",
//     footer:
//       "Claim FREE gift cards as they become available from the business listed above ",
//   };

//   const theme = useTheme();
//   const auth = useAuth();

//   return (
//     <Container maxWidth={false} disableGutters>
//       <Box
//         sx={{
//           textAlign: "center",
//           height: "fit-content",
//           backgroundColor: { xs: "white", md: "black" },
//           p: 2,
//         }}
//       >
//         <Carousel>
//           {Array(12)
//             .fill(data)
//             .map((data) => (
//               <Box key={data.name} sx={{ px: 7, pt: 7, pb: 3 }}>
//                 <Grid container spacing={2}>
//                   <Grid
//                     item
//                     sx={{
//                       display: "flex",
//                       justifyContent: "start",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                     }}
//                     xs={12}
//                     md={7}
//                     order={{ xs: 1, md: 0 }}
//                   >
//                     <Chip
//                       label="Featured"
//                       color="info"
//                       size="small"
//                       sx={{ borderRadius: "4px", fontWeight: 900, my: 2 }}
//                     />
//                     <Title
//                       sx={{
//                         color: { xs: "black", md: "white" },
//                       }}
//                     >
//                       {data.name}
//                     </Title>
//                     <Address>{data.location}</Address>
//                     <Box sx={{ pr: "35%" }}>
//                       <Info
//                         color="white"
//                         sx={{
//                           textAlign: "left",
//                           mt: 1,
//                           color: { xs: "black", md: "white" },
//                         }}
//                       >
//                         {data.description}
//                       </Info>
//                     </Box>
//                     <Subscribe
//                       subsctibers={46.2}
//                       color={theme.palette.info.light}
//                       auth={auth}
//                     />
//                   </Grid>

//                   <Grid item xs={12} md={5} order={{ xs: 0, md: 1 }}>
//                     <Card sx={{ width: "100%", maxHeight: "300px" }}>
//                       <img
//                         src={data.image}
//                         alt={data.name}
//                         width="100%"
//                         height="100%"
//                         style={{ objectFit: "cover" }}
//                       />
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Box>
//             ))}
//         </Carousel>
//       </Box>
//       <Container maxWidth={false} sx={{ mt: 4 }}>
//         <Typography variant="h6" sx={{ mb: 2, fontWeight: 900 }}>
//           Seattle,WA
//         </Typography>
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{
//             width: "100%",
//             overflow: "auto",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {Array(15)
//             .fill(data)
//             .map((data) => (
//               <LocationCard1 key={data.name} data={data} />
//             ))}
//         </Container>
//         <Spacing spacing={2} variant="bottom" />
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{
//             width: "100%",
//             overflow: "auto",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {Array(15)
//             .fill(data)
//             .map((data) => (
//               <LocationCard1 key={data.name} data={data} />
//             ))}
//         </Container>
//         <Spacing spacing={2} variant="bottom" />
//         <Container
//           maxWidth={false}
//           disableGutters
//           sx={{
//             width: "100%",
//             overflow: "auto",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {Array(15)
//             .fill(data)
//             .map((data) => (
//               <LocationCard1 key={data.name} data={data} />
//             ))}
//         </Container>

//         <Box
//           sx={{
//             my: 6,
//             mx: "auto",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Button variant="rounded">Load More</Button>
//         </Box>
//       </Container>
//     </Container>
//   );
// }

import React, { useCallback, useEffect, useRef } from "react";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { LocationCard1 } from "components/location/location-card-1";
import {
  Address,
  Info,
  Subscribe,
  Title,
} from "components/location/location-card";
import { useAuth } from "context/auth.context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from "data";
import { AdminThunk } from "data/thunk/admin.thunk";
import { GET_BANNER_LIST } from "data/selectors";

/**
 *
 */
export function Home() {
  const data = {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2881&q=80",
    name: "India Gate Restaurant",
    location: "Seattle,WA",
    description:
      "Welcome to the India Gate Restaurant where we offer unique food.",
    subscribers: "46.2K subscribers",
    footer:
      "Claim FREE gift cards as they become available from the business listed above ",
  };

  const dummArr = [
    {
      id: 1,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-SEOcrawl-_169_zvrHHYU.png?width=530&height=353&aspect_ratio=3:2",
      name: "India Gate Restaurant",
      location: "Seattle,WA",
      description:
        "Welcome to the India Gate Restaurant where we offer unique food.",
      subscribers: "46.2K subscribers",
      footer:
        "Claim FREE gift cards as they become available from the business listed above ",
    },
    {
      id: 2,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-SEOcrawl-_169_zvrHHYU.png?width=530&height=353&aspect_ratio=3:2",
      name: "India Gate Restaurant",
      location: "Seattle,WA",
      description:
        "Welcome to the India Gate Restaurant where we offer unique food.",
      subscribers: "46.2K subscribers",
      footer:
        "Claim FREE gift cards as they become available from the business listed above ",
    },
    {
      id: 3,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-SEOcrawl-_169_zvrHHYU.png?width=530&height=353&aspect_ratio=3:2",
      name: "India Gate Restaurant",
      location: "Seattle,WA",
      description:
        "Welcome to the India Gate Restaurant where we offer unique food.",
      subscribers: "46.2K subscribers",
      footer:
        "Claim FREE gift cards as they become available from the business listed above ",
    },
    {
      id: 4,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-SEOcrawl-_169_zvrHHYU.png?width=530&height=353&aspect_ratio=3:2",
      name: "India Gate Restaurant",
      location: "Seattle,WA",
      description:
        "Welcome to the India Gate Restaurant where we offer unique food.",
      subscribers: "46.2K subscribers",
      footer:
        "Claim FREE gift cards as they become available from the business listed above ",
    },
    {
      id: 5,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-SEOcrawl-_169_zvrHHYU.png?width=530&height=353&aspect_ratio=3:2",
      name: "India Gate Restaurant",
      location: "Seattle,WA",
      description:
        "Welcome to the India Gate Restaurant where we offer unique food.",
      subscribers: "46.2K subscribers",
      footer:
        "Claim FREE gift cards as they become available from the business listed above ",
    },
  ];

  const cardArr = [
    {
      id: 1,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 2,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 3,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 4,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 5,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 6,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 7,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 8,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 9,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 10,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 11,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 12,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 13,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
    {
      id: 14,
      image:
        "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-sendfox_1.png?width=450&height=300&aspect_ratio=3:2",
    },
  ];

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

  const sliderRef = useRef<Slider>(null);
  const cardRef = useRef<Slider>(null);
  const cardRef2 = useRef<Slider>(null);
  const cardRef3 = useRef<Slider>(null);

  const theme = useTheme();
  const auth = useAuth();
  const dispatch = useAppDispatch();

  const AllBusiness = useCallback(async () => {
    try {
      dispatch(AdminThunk.business());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    AllBusiness();
  }, [AllBusiness]);

  return (
    <div className="w-full border-[5px] ">
      <div className="py-5 md:py-20 bg-white md:bg-black relative  w-full">
        <Slider ref={sliderRef} {...settings}>
          {dummArr.map((ele) => (
            <div key={ele?.id}>
              <div className="max-w-[100%] lg:max-w-[80%] xl:max-w-[70%] gap-5  min-h-[300px] mx-auto flex flex-col-reverse md:flex-row justify-between px-5 lg:px-0 relative">
                <div className="w-full md:w-1/2 gap-5 flex flex-col px-2 md:px-10">
                  <button className="bg-[#0275d8] w-28 rounded-md text-[0.9rem] py-2 px-2 font-normal text-white">
                    Featured
                  </button>
                  <p className="text-black md:text-white text-[1.6rem] font-semibold">
                    {ele?.name}
                  </p>
                  <p className=" text-black md:text-[#bdbdbd] text-[0.8rem] ">
                    {ele?.location}
                  </p>
                  <p className="text-black md:text-white text-[0.95rem] font-normal">
                    {ele?.description}
                  </p>
                  <p className="text-[#0275d8]">{ele?.subscribers}</p>
                  <button className="bg-[#d32f3f] text-[1rem] w-36 rounded-full  py-4 px-2 font-normal text-white">
                    Subscribe Now
                  </button>
                </div>
                <div className=" relative min-h-[353px] max-h-[calc(100vh-25rem)] w-full  md:w-1/2 flex justify-center items-center">
                  <img
                    src={ele?.image}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <SliderArrow refVal={sliderRef} />
      </div>

      <div className="w-full px-5 mt-8">
        <p className="font-semibold text-[1.2rem] pb-5">Seattle, WA</p>

        <div className="relative">
          <Slider ref={cardRef} {...cardSettings}>
            {cardArr?.map((ele) => (
              <div
                style={{
                  boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                }}
                key={ele?.id}
                className="relative overflow-x-auto md:overflow-x-hidden "
              >
                <SliderCard imgSrc={ele?.image} />
              </div>
            ))}
          </Slider>

          <SliderArrow refVal={cardRef} />
        </div>

        <div className="relative mt-10">
          <Slider ref={cardRef2} {...cardSettings}>
            {cardArr?.map((ele) => (
              <div
                style={{
                  boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                }}
                key={ele?.id}
                className="relative overflow-x-auto md:overflow-x-hidden "
              >
                <SliderCard imgSrc={ele?.image} />
              </div>
            ))}
          </Slider>

          <SliderArrow refVal={cardRef2} />
        </div>

        <div className="relative my-10">
          <Slider ref={cardRef3} {...cardSettings}>
            {cardArr?.map((ele) => (
              <div
                style={{
                  boxShadow: "0 0 20px rgb(1 0 0 / 10%)",
                }}
                key={ele?.id}
                className="relative overflow-x-auto md:overflow-x-hidden "
              >
                <SliderCard imgSrc={ele?.image} />
              </div>
            ))}
          </Slider>
          <SliderArrow refVal={cardRef3} />
        </div>
      </div>
    </div>
  );
}

const SliderCard = (props: any) => {
  const HomeBannerList = useAppSelector(GET_BANNER_LIST);
  const dispatch = useAppDispatch();

  const HomeBanner = useCallback(async () => {
    try {
      dispatch(AdminThunk.bannerList());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <div className="w-full mx-auto  md:mx-5 relative max-w-[350px] bg-white  border-[1px] border-[#DADDE5] ">
      <img
        src={props.imgSrc}
        alt="image"
        className="w-full h-full object-cover min-h-[215px]"
      />
      <div className="p-3">
        <p className="text-[1.3rem] font-semibold text-[#021414] leading-[22px] py-2">
          Inida gate Restaurant
        </p>
        <p className="text-[0.9rem] text-[#09292B] leading-[22px] font-semibold py-2">
          Seattle, WA
        </p>
        <p className="text-[1rem] leading-[24px] text-ellipsis text-[#434D59] py-2">
          Welcome to the India Gate Restaurant where we offer unique food.
        </p>
        <div className="flex justify-between">
          <p className="text-[0.9rem] text-[#CDCDCD]">
            <span className="text-[20px] text-black pr-2"> 46.2k </span>
            subscribers
          </p>
          <button className="bg-[#D32F3F] text-[0.9rem] w-36 rounded-full  py-2 px-1 font-normal text-white">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

const SliderArrow = (props: any) => {
  return (
    <div
      className={`w-full pointer-events-none z-50 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex px-5 justify-between  text-white font-normal `}
    >
      <SlArrowLeft
        onClick={() => props?.refVal?.current?.slickPrev()}
        className={`text-3xl md:text-5xl p-2 rounded-full bg-[#09292b] font-normal relative pointer-events-auto z-50 cursor-pointer `}
      />
      <SlArrowRight
        onClick={() => {
          props?.refVal?.current?.slickNext();
        }}
        className="text-3xl md:text-5xl p-2 rounded-full bg-[#09292b] font-normal relative z-50 pointer-events-auto cursor-pointer"
      />
    </div>
  );
};
