import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  MenuItem,
  AppBar,
  Backdrop,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "components/logo";
import { faBell, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "context/auth.context";
import { useSpring, animated } from "@react-spring/web";
import "./appBar-v2-style.css";
import { AdminRoutePathEnum, AuthRoutePathEnum, RoutePathEnum } from "enum";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchField } from "./component/search-field/search-field";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import {
  GET_BUSINESS,
  GET_CATEGORY,
  GET_USER_NOTIFICTAION,
} from "data/selectors";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";

export const UserAppBar = (props: any) => {
  const theme = useTheme();
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const categoryData = useAppSelector(GET_CATEGORY);
  const userNotificationData = useAppSelector(GET_USER_NOTIFICTAION);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorNoticationEl, setAnchorNoticationEl] =
    React.useState<null | HTMLElement>(null);
  const [menuItem, setMenuItem] = useState<any>([]);
  const [locationPopUp, setLocationPopUP] = useState<any>(false);
  const [searchLocation, setLocation] = useState<any>("");
  const homepage = location.pathname;
  const userId = localStorage.getItem("userId");
  const [readMoreNotification, setReadMoreNotification] = useState<any>({});

  console.log(userNotificationData, "userNotificationData");

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

  const getUserNotification = useCallback(async () => {
    try {
      if (userId) {
        await dispatch(
          AdminThunk.getUserNotification({
            userID: parseInt(userId),
          })
        );
      }
    } catch (error) {
      console.log(error, "this is  err res");
    }
  }, [dispatch, userId]);
 
  
  const readNotification = useCallback(
    async ({id , readId} :any) => {
       console.log(id , readId ,  'ids')
      // const data = {
      //   read: Number   userId ?  parseInt(userId) : 0,
      // };
      try {
       
          await dispatch(
            AdminThunk.readUserNotification({
              notificationId: id,
              read: readId,
            })
          );
     
        await getUserNotification();
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, getUserNotification]
  );

  useEffect(() => {
    if (auth.isAuthenticated) {
      setInterval(() => {
        getUserNotification();
      }, 10000);
    }
  }, [auth.isAuthenticated, getUserNotification]);

  // console.log(categoryData, 'categoryData');

  const CateName = categoryData.map((item: any) => item?.vName);

  const opens = Boolean(anchorEl);
  const openNotification = Boolean(anchorNoticationEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorNoticationEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorNoticationEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showLocationPopUp = () => {
    setLocationPopUP(true);
  };

  // const disableCloseOnSelect = () => {
  //   setLocation("");
  //   setLocationPopUP(false);
  //   navigate(`/?`);
  // };
  const handlevalue = (el: any) => {
    if (el == undefined) {
      setLocation("");
      setLocationPopUP(false);
      navigate(`/?`);
      setOpen(false)
    } else {
      setLocation(el);
      navigate(`/?${el}`);
    }
  };

  const handleLocation = (event: any) => {
    setLocation(event.target.value);
    navigate(`/?${event.target.value}`);
  };

  const handleLocationSearch = () => {
    navigate(`/?${searchLocation}`);
    setLocationPopUP(false);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId === "4") {
      if (homepage.split("/")[1] === "admin") {
        const data = [
          {
            title: "Go To Home Page",
            route: RoutePathEnum.HOME,
          },
          {
            title: "Profile",
            route: RoutePathEnum.PROFILE,
          },
          {
            title: "Subscription",
            route: RoutePathEnum.SUBSCRIPTIONS,
          },
          {
            title: "Rewards",
            route: RoutePathEnum.REWARDS,
          },
          {
            title: "Refferal Program",
            route: RoutePathEnum.REFER,
          },
          {
            title: "Logout",
            route: AuthRoutePathEnum.SIGN_IN,
          },
        ];
        setMenuItem(data);
      } else if (homepage === "/") {
        const data = [
          {
            title: "Dashboard",
            route: AdminRoutePathEnum.ADMIN,
          },
          {
            title: "Profile",
            route: RoutePathEnum.PROFILE,
          },
          {
            title: "Subscriptions",
            route: RoutePathEnum.SUBSCRIPTIONS,
          },
          {
            title: "Rewards",
            route: RoutePathEnum.REWARDS,
          },
          {
            title: "Referrals",
            route: RoutePathEnum.REFER,
          },
          {
            title: "Logout",
            route: AuthRoutePathEnum.SIGN_IN,
          },
        ];
        setMenuItem(data);
      } else {
        const data = [
          {
            title: "Dashboard",
            route: AdminRoutePathEnum.ADMIN,
          },
          {
            title: "Profile",
            route: RoutePathEnum.PROFILE,
          },
          {
            title: "Subscriptions",
            route: RoutePathEnum.SUBSCRIPTIONS,
          },
          {
            title: "Rewards",
            route: RoutePathEnum.REWARDS,
          },
          {
            title: "Referrals",
            route: RoutePathEnum.REFER,
          },
          {
            title: "Logout",
            route: AuthRoutePathEnum.SIGN_IN,
          },
        ];
        setMenuItem(data);
      }
    } else {
      const data = [
        {
          title: "Profile",
          route: RoutePathEnum.PROFILE,
        },
        {
          title: "Subscription",
          route: RoutePathEnum.SUBSCRIPTIONS,
        },
        {
          title: "Rewards",
          route: RoutePathEnum.REWARDS,
        },
        {
          title: "Refferal Program",
          route: RoutePathEnum.REFER,
        },
        {
          title: "Change Password",
          route: AuthRoutePathEnum.CHANGE_PASSWORD,
        },
        {
          title: "Logout",
          route: AuthRoutePathEnum.SIGN_IN,
        },
      ];
      setMenuItem(data);
    }
  }, []);

  // );

  const [open, setOpen] = useState<boolean>(false);
  console.log(open, 'open')
  const spring = useSpring({
    from: { height: "0px" },
    to: { height: !isMobile ? "auto" : open ? "320px" : "0px" },
  });

  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "is-sticky" : "";
    setSticky(stickyClass);
  };
  const businessData = useAppSelector(GET_BUSINESS);

  // console.log(businessData  ,'businessData')

  const defaultProps = {
    options: businessData,
    getOptionLabel: (option: any) => option.vLocation,
  };
  // const flatProps = {
  //   options: businessData.map((option) => option.vLocation),
  // };

  const handleBanner = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.appBar,
          backgroundColor: "white",
          position: "relative ",
        }}
        className={`${props.display ? props.display : sticky ? "" : "non-sticky"
          } `}

      // style={{ position: props.display && 'fixed' }}
      >
        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
            mt: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className=" absolute  left-4 top-[3px] ">
            <IconButton onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={open ? faClose : faBars} size="sm" />
            </IconButton>
          </div>


          {/*---------------------------- bage logos header ------------------------ */}

          <div className={`flex w-full  ${auth.isAuthenticated ? 'justify-end' : 'justify-center'}`}>
            <div className=" grid-cols-1">

              <Logo variant="dark" />
            </div>

            {auth.isAuthenticated ? (
              <div className="w-[30%] grid-cols-1  align-end text-right">
                <IconButton
                  sx={{ mx: 1 }}
                  onClick={handleNotificationClick}
                  id="basic-button"
                  aria-controls={openNotification ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNotification ? "true" : undefined}
                >
                  <Badge
                    badgeContent={
                      userNotificationData.length > 0
                        ? userNotificationData.length
                        : ""
                    }
                    color={userNotificationData.length > 0 ? "error" : undefined}
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </Badge>
                </IconButton>


                {auth.isAuthenticated && isMobile &&
                  <>
                    <IconButton
                      sx={{ mx: 1 }}
                      onClick={handleClick}
                      id="basic-button"
                      aria-controls={opens ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={opens ? "true" : undefined}
                    >
                      <FontAwesomeIcon icon={faUserCircle} />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={opens}
                      onClose={handleClose}
                      className="Account-popup"
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {menuItem.map((setting: any) => (
                        <MenuItem
                          key={setting.route}
                          onClick={() => {
                            setting.title === "Logout" && auth.signOut();
                            handleClose();
                          }}
                        >
                          <Link key="profile-menu" href={setting.route}>
                            <Typography textAlign="left" className="text-black ">
                              {setting.title}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                }


              </div>
            ) : (
              <Button
                variant="contained"
                sx={{
                  minWidth: "fit-content",
                  display: { xs: "none", md: "none" },
                }}
              >
                Log In
              </Button>
            )}
          </div>
        </Toolbar>



        <Toolbar
          sx={{
            px: 4,
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
          className="topheader"
        >
          {homepage.split("/")[1] === "admin" ? (
            <h1></h1>
          ) : (
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Logo variant="dark" />
            </Box>
          )}

          {homepage.split("/")[1] === "admin" ? (
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Logo variant="dark" />
            </Box>
          ) : (
            <SearchField />
          )}


          {/* < ------------------- location input field ---------------------> */}
          {homepage === "/" && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {!locationPopUp ? (
                <Button
                  onClick={showLocationPopUp}
                  disableRipple
                  sx={{ minWidth: "120px", color: "text.primary" }}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="sm"
                    style={{ marginRight: "8px" }}
                  />
                  Location
                </Button>
              ) : (
                // <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                //   <InputLabel htmlFor="standard-adornment-password">
                //     Search
                //   </InputLabel>
                //   <Input
                //     id="standard-adornment-password"
                //     type={"text"}
                //     onChange={handleLocation}
                //     endAdornment={
                //       <InputAdornment position="end">
                //         <IconButton
                //           aria-label="toggle password visibility"
                //         // onClick={handleClickShowPassword}
                //         // onMouseDown={handleMouseDownPassword}
                //         >
                //           <Button onClick={handleLocationClose}>Cancel</Button>
                //         </IconButton>
                //       </InputAdornment>
                //     }
                //   />
                // </FormControl>

                <Stack spacing={1} sx={{ m: 1, width: "25ch" }}>
                  <Autocomplete
                    {...defaultProps}
                    id="disable-close-on-select"
                    //  onClick={disableCloseOnSelect}
                    onChange={(event, newValue: any) => {
                      console.log(event, "event onchange");
                      handlevalue(newValue?.vLocation);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onChange={handleLocation}
                        label="Search"
                        variant="standard"
                      />
                    )}
                  />
                </Stack>
              )}

              <Divider
                flexItem
                orientation="vertical"
                variant="middle"
                sx={{ mx: 1, height: "30px", my: "auto" }}
              />
            </Box>
          )}
          {!auth.isAuthenticated ? (
            <Button
              variant="contained"
              sx={{ minWidth: "100px", display: { xs: "none", md: "block" } }}
              onClick={() => {
                navigate(AuthRoutePathEnum.SIGN_IN);
              }}
            >
              Log In
            </Button>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                sx={{ mx: 1 }}
                onClick={handleClick}
                id="basic-button"
                aria-controls={opens ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={opens ? "true" : undefined}
              >
                <FontAwesomeIcon icon={faUserCircle} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opens}
                onClose={handleClose}
                className="Account-popup"
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {menuItem.map((setting: any) => (
                  <MenuItem
                    key={setting.route}
                    onClick={() => {
                      setting.title === "Logout" && auth.signOut();
                      handleClose();
                    }}
                  >
                    <Link key="profile-menu" href={setting.route}>
                      <Typography textAlign="left" className="text-black ">
                        {setting.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>


              <IconButton
                sx={{ mx: 1 }}
                onClick={handleNotificationClick}
                id="basic-button"
                aria-controls={openNotification ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openNotification ? "true" : undefined}
              >
                <Badge
                  badgeContent={
                    userNotificationData.length > 0
                      ? userNotificationData.length
                      : ""
                  }
                  color={userNotificationData.length > 0 ? "error" : undefined}
                >
                  <FontAwesomeIcon icon={faBell} />
                </Badge>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorNoticationEl}
                open={openNotification}
                onClose={handleNotificationClose}
                className="Notification-popup"
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >

                {/* <-------------------------- notification dropdown -----------------> */}
                {userNotificationData.length > 0 ? (
                  userNotificationData.map((res: any, i: number) => {
                    console.log(res.iNotificationId, "res");

                    return (
                      <div className="Notification list w-[350px]  mx-2 px-2 py-2  shadow-md rounded-[6px] border-solid   my-2 " key={i} >
                        <div className="">
                          <div className="grid w-full gap-[5px]">
                            {/* <li className="text-black cursor-pointer text-[16px] "> */}
                            <div className="flex gap-[5px] items-center ">
                              <div className="bg-red-500 px-[13px] py-[5px] text-[12px] rounded-[30px] text-white ">
                                {" "}
                                Announcement
                              </div>
                              <div className=" text-[14px] font-[400] text-[#262626] ">
                                {res.dDate &&
                                  format(new Date(res.dDate), "dd-MM-yyyy")}
                              </div>
                            </div>
                            <h1 className="text-[18px] font-[900] text-[#252525]">
                              {res.vHeadline}
                            </h1>
                            {/* <div className="flex "> */}
                            <p className="text-[14px] flex font-[400] text-[#262626]">
                              {readMoreNotification.state &&
                                readMoreNotification.id == res.iNotificationId ? (
                                <div className="">
                                  <span>{res.vDesc}</span>
                                  {res.vDesc.length > 55 ?
                                    <div>
                                      <span className="text-[14px] w-[50px]  text-[#2196F3] cursor-pointer font-medium "
                                        onClick={() => setReadMoreNotification({ state: false, id: res.iNotificationId })} >  Read Less</span>
                                      <span className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal  "
                                        onClick={() => {
                                          readNotification({id: res.iNotificationId , readId : 1});
                                        }}>Mark read</span>
                                    </div>
                                    : <span className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal  "
                                      onClick={() => {
                                        readNotification({id: res.iNotificationId , readId : 1});
                                      }}>Mark read</span>}
                                </div>
                              ) : (
                                <div className="">
                                  <span className="NotextLimit2">
                                    {res.vDesc}
                                  </span>
                                  {res.vDesc.length > 55 ?
                                    <div className="">
                                      <span className="text-[14px] w-[50px]  text-[#2196F3] cursor-pointer  font-medium"
                                        onClick={() => setReadMoreNotification({ state: true, id: res.iNotificationId })} >  ...Read More</span>
                                      <span className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal"
                                        onClick={() => {
                                          readNotification({id: res.iNotificationId , readId : 1});
                                        }}>Mark read</span>
                                    </div>

                                    : <span className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal  "
                                      onClick={() => {
                                        readNotification({id: res.iNotificationId , readId : 1});
                                      }}>Mark read</span>}
                                </div>
                              )}
                              {/* {!readMoreNotification ?
                                
                                :
                              } */}
                            </p>
                            {/* </div> */}
                            {/* <span
                            className="w-[30%] text-center text-[15px]"
                            onClick={() => {
                              readNotification(res.iNotificationId);
                            }}
                          >
                            Read
                          </span> */}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <MenuItem
                    onClick={() => {
                      handleNotificationClose();
                    }}
                  >
                    No Notifications
                  </MenuItem>
                )}
              </Menu>
            </Box>
          )}
        </Toolbar>

        {/* <-------------------------mobile dropdown-----------------> */}

        {props?.userMenu == true && categoryData.length > 0 && (
          <animated.div style={{ overflow: "hidden", ...spring }} >
            <Toolbar>
              <div className="moblieMenu">
                <List
                  className="categoryListing "
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    ".MuiListItem-root": {
                      minWidth: "fit-content",
                      cursor: "pointer",
                    },
                  }}
                >
                  {categoryData.map((item: any, index: any) =>
                    index === 0 ? (
                      <ListItem key={index}>
                        <Link href={`/category/${item?.iCategoryId}`} onClick={handleBanner}>
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 1 ? (
                      <ListItem key={index}>
                        <Link href={`/category/${item?.iCategoryId}`} onClick={handleBanner}>
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 2 ? (
                      <ListItem key={index}>
                        <Link href={`/category/${item?.iCategoryId}`} onClick={handleBanner}>
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : (
                      index === 3 && (
                        <ListItem>
                          <Link href={`/category/all`} onClick={handleBanner} >{"More"}</Link >

                        </ListItem>
                      )
                    )
                  )}

                  {isMobile ?
                    <ListItem className='' >
                      <Box sx={{ display: { xs: "Block", md: "flex" } }} className='w-[100%]  mt-2'>
                        {!locationPopUp ? (
                          <Button
                            onClick={showLocationPopUp}
                            disableRipple
                            sx={{ color: "text.primary" }}
                            className=''
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              size="sm"
                              style={{ marginRight: "8px" }}
                            />
                            Location
                          </Button>
                        ) : (


                          <Stack spacing={1} className='w-[100%] my-3'>
                            <Autocomplete
                              {...defaultProps}
                              id="disable-close-on-select"
                              //  onClick={disableCloseOnSelect}  
                              onChange={(event, newValue: any) => {
                                console.log(event, 'event onchange');
                                setOpen(false)
                                handlevalue(newValue?.vLocation);

                              }}
                              renderInput={(params) => (
                                <TextField {...params} onChange={handleLocation} label="Search" variant="standard" />
                              )}
                            />
                          </Stack>
                        )}

                        {/* <Divider
                        flexItem
                        orientation="vertical"
                        variant="middle"
                        sx={{ mx: 1, height: "30px", my: "auto" }}
                      /> */}
                      </Box>
                    </ListItem> : null}

                  <ListItem className=" rounded-[10px] my-5">

                    {!auth.isAuthenticated && isMobile ?
                      <Button
                        className="w-[100%]"
                        variant="contained"
                        sx={{ minWidth: "100px" }}
                        onClick={() => {
                          navigate(AuthRoutePathEnum.SIGN_IN);
                        }}
                      >
                        Log In
                      </Button> : null}

                  </ListItem>

                </List>
              </div>




            </Toolbar>
          </animated.div>
        )}
      </AppBar>
      <Backdrop
        open={open}
        sx={{ zIndex: theme.zIndex.appBar - 1 }}
        onClick={() => setOpen(false)}
      />
    </>
  );
};
