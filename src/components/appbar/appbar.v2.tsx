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
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from '@mui/material/Dialog';
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
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import CloseIcon from '@mui/icons-material/Close';
import {
  GET_BUSINESS,
  GET_CATEGORY,
  GET_USER_NOTIFICTAION,
} from "data/selectors";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";
import {
  faDiagramProject,
  faHome,
  faList,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import toast from "react-hot-toast";
import ScrollToTop from "scrollTop";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { GridCloseIcon } from "@mui/x-data-grid";

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
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [viewValue, setValue] = useState('')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setValue('')
    setLocation('')
  }, [homepage])


  const routeAdmin = homepage?.split("/")[1];

  // isMobile admin list----------------------------------------
  const menuList = React.useMemo(
    () => [
      {
        title: "Dashboard",
        icon: faHome,
        route: AdminRoutePathEnum.ADMIN,
      },

      {
        title: "Listing",
        icon: faList,
        route: AdminRoutePathEnum.ADMIN_LISTING,
      },

      {
        title: "Subscribers",
        icon: faHome,
        route: AdminRoutePathEnum.ADMIN_SUBSCRIBERS,
      },

      {
        title: "Categories",
        icon: faUser,
        route: AdminRoutePathEnum.ADMIN_CATEGORY,
      },

      {
        title: "Notifications",
        icon: faBell,
        route: AdminRoutePathEnum.ADMIN_NOTIFICATION,
      },

      {
        title: "Rewards",
        icon: faTrophy,
        route: AdminRoutePathEnum.ADMIN_MILESTONES,
      },

      {
        title: "Referrals",
        icon: faDiagramProject,
        route: AdminRoutePathEnum.ADMIN_REFERRALS,
      },
    ],
    []
  );

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
    async ({ id, readId }: any) => {

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


  const CateName = categoryData.map((item: any) => item?.vName);

  const opens = Boolean(anchorEl);
  const openNotification = Boolean(anchorNoticationEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(false)
  };

  const handleNotificationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorNoticationEl(event.currentTarget);
    setOpen(false)
  };

  const handleNotificationClose = () => {
    setAnchorNoticationEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let inputRef: { focus: () => void; };

  const showLocationPopUp = () => {
    setLocationPopUP(true);
  };

  useEffect(() => {
    setTimeout(function () {
      inputRef.focus()
    }, 100)
  }, [locationPopUp])

  const handlevalue = (el: any) => {
    console.log(el, 'el value');
    if (homepage == "/") {
      if (el == undefined) {
        setLocation("");
        // setLocationPopUP(false);
        navigate(`/?`);
        setOpen(false);
        setValue('')
      } else {
        setLocation(el?.replaceAll(/\s/g, ''));
        navigate(`/?${el?.replaceAll(/\s/g, '')}`);
        setValue(el)
        setLocationPopUP(false)
      }
    }

    if (routeAdmin == "category") {
      if (el == undefined) {
        setLocation("");
        // setLocationPopUP(false);
        navigate(`?`);
        setOpen(false);
        setValue('')
      } else {
        setLocation(el?.replaceAll(/\s/g, ''));
        navigate(`?${el?.replaceAll(/\s/g, '')}`);
        setValue(el)
        setLocationPopUP(false)
      }
    }
  };

  const handleLocation = (event: any) => {
    console.log(event.target.value, 'event')
    if (homepage == "/") {
      setLocation(event.target.value?.replaceAll(/\s/g, ''));
      navigate(`/?${event.target.value?.replaceAll(/\s/g, '')}`);
    }

    if (routeAdmin == "category") {
      // setLocation(event.target.value);
      setLocation(event.target.value?.replaceAll(/\s/g, ''));
      navigate(`?${event.target.value?.replaceAll(/\s/g, '')}`);
    }
  };


  const handleLocationSearch = () => {
    // navigate(`/?${searchLocation}`);
    setLocationPopUP(false);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const iGroupId = localStorage.getItem("iGroupId");
    if (iGroupId === "1") {
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
            title: "Subscriptions",
            route: RoutePathEnum.SUBSCRIPTIONS,
          },
          {
            title: "Rewards",
            route: RoutePathEnum.REWARDS,
          },
          {
            title: "Referral Program",
            route: RoutePathEnum.REFER,
          },
          {
            title: "Logout",
            route: RoutePathEnum.HOME,
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
            title: "Referral Program",
            route: RoutePathEnum.REFER,
          },
          {
            title: "Logout",
            route: RoutePathEnum.HOME,
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
            title: "Referral Program",
            route: RoutePathEnum.REFER,
          },
          {
            title: "Logout",
            route: RoutePathEnum.HOME,
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
          title: "Subscriptions",
          route: RoutePathEnum.SUBSCRIPTIONS,
        },
        {
          title: "Rewards",
          route: RoutePathEnum.REWARDS,
        },
        {
          title: "Referral Program",
          route: RoutePathEnum.REFER,
        },
        {
          title: "Logout",
          route: RoutePathEnum.HOME,
        },
      ];
      setMenuItem(data);
    }
  }, []);



  const [open, setOpen] = useState<boolean>(false);

  const spring = useSpring({
    from: { height: "0px" },
    to: auth.isAuthenticated ? { height: !isMobile ? "auto" : open ? "350px" : "0px" } : { height: !isMobile ? "auto" : open ? "425px" : "0px" },
  });

  const spring2 = useSpring({
    from: { height: "0px" },
    to: { height: open ? "auto" : "0px" },
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

  const data = businessData?.map((item: any) => {
    return item?.vLocation.toString().toLowerCase()
  })


  const removeDupValue = [...new Set(data)];

  const defaultProps = {
    options: searchLocation == '' ? [] :  removeDupValue.filter((el) => Object.values(el).join('').toString().toLowerCase().includes(searchLocation.toString().toLowerCase())),
    getOptionLabel: (option: any) => capitalizeFirstLetter(option),
  };

  const serchList = businessData.map((el, index) => {
    return {
      id: index,
      name: el.vLocation
    }


  })

  const flatProps = {
    options: businessData.map((option: { vLocation: any }) => option.vLocation),
  };

  const handleBanner = () => {
    // navigate(`/category?${item.vName.replace(/\s/g,'-')}` ,
    // {state:{id: item?.iCategoryId ,vName: item.vName.replace(/\s/g,'-')}})
    setOpen(false);
  };




  function BootstrapDialogTitle(props: any) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} className='!p-0' {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <GridCloseIcon className="!h-[30px] !w-[30px] !text-[#595959]" />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  function capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <ScrollToTop />
      <AppBar

        color="default"
        elevation={0}
        sx={{
          // zIndex: theme.zIndex.appBar,
          backgroundColor: "white",
          position: "relative ",
        }}
        className={`${props.display ? props.display : sticky ? "" : "non-sticky"
          } ${!isMobile ? '!pt-4' : ''} `}

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
          <div className=" absolute  left-4 top-[10px] ">
            <IconButton onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={open ? faClose : faBars} size="sm" />
            </IconButton>
          </div>

          {/*---------------------------- bage logos header ------------------------ */}

          <div
            className={`flex w-full  ${auth.isAuthenticated
              ? "justify-end items-center"
              : "justify-center"
              }`}
          >
            <div className=" grid-cols-1" onClick={() => setOpen(false)}>
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
                    color={
                      userNotificationData.length > 0 ? "error" : undefined
                    }
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </Badge>
                </IconButton>

                {auth.isAuthenticated && isMobile && (
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
                          key={setting?.route}
                          onClick={() => {
                            setting.title === "Logout" && auth.signOut();
                            setting.title === "Logout" &&
                              toast.success("You have successfully logged out!");
                            handleClose();
                          }}
                        >
                          <Link key="profile-menu" href={setting?.route}>
                            <Typography
                              textAlign="left"
                              className="text-black "
                            >
                              {setting?.title}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
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
            px: 2,
            py: 1,
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
          className={`${isMobile && (homepage.split("/")[1] === "admin" ? !open : open) ? '!hidden' : ''} 'topheader' ${isMobile && !(homepage.split("/")[1] === "admin") ? '!min-h-0' : ''}`}
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
            <>
              {/* <----------------- search field and location input----------------> */}

              {homepage == "/" || routeAdmin == "category" ?
                (<div className={`${isMobile ? '' : 'flex'} gap-2 items-center w-full`}>

                  <div className={`${isMobile ? 'w-full' : "w-[52%] ml-[8%]"}`}>
                    <SearchField handleBanner={handleBanner} setLocationPopUP={setLocationPopUP} />
                  </div>
                  <div>

                    <Box sx={{ display: { md: "flex" } }}>
                      <div className="flex  items-center">
                        <Button
                          className={`${isMobile ? '!py-4 !pr-1' : '!pl-3'}`}
                          onClick={showLocationPopUp}
                          disableRipple
                          sx={{ minWidth: 0, color: "text.primary", p: 0 }}
                        >
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            size="xl"
                            style={{ marginRight: "8px" }}
                          />

                        </Button>
                        {viewValue && <div className="items-center py-3">
                          <span className="text-[16px]">{capitalizeFirstLetter(viewValue)}
                            {/* <CloseIcon onClick={()=> {setLocation(''), navigate('/')}}
                               className="!h-[22px] ml-1 cursor-pointer !w-[22px]"/> */}
                          </span>
                        </div>}
                      </div>
                      {/* <div>
                        <BootstrapDialog
                          // onClose={() => setLocationPopUP(false)}
                          aria-labelledby="customized-dialog-title"
                          open={locationPopUp}
                        >
                          <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setLocationPopUP(false)}>
                            Location
                          </BootstrapDialogTitle>
                          <DialogContent dividers>
                            <Stack spacing={1} sx={{ m: 1, width: "50ch" }} >
                              <Autocomplete
                                {...defaultProps}
                                selectOnFocus={false}
                                noOptionsText={'Enter your city'}
                                autoSelect={true}
                                onClose={(e) => {
                                  if (e.cancelable == false) {
                                    setLocationPopUP(false)
                                  }
                                }}
                                id="disable-close-on-select"
                                onChange={(event, newValue: any) => {
                                  console.log(event, "event onchange-----------");
                                  handlevalue(newValue);
                                }}
                                openOnFocus
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    onChange={handleLocation}
                                    label="Search"
                                    variant="standard"
                                    focused
                                    inputRef={input => {
                                      inputRef = input;
                                    }}
                                  />

                                )}

                              />
                            </Stack>

                          </DialogContent>

                        </BootstrapDialog>
                      </div> */}


                      <Dialog open={locationPopUp} onClose={() => setLocationPopUP(false)}>
                        <div className={'flex justify-center'}>
                          <DialogTitle className=" !font-bold !text-[22px]">Location</DialogTitle>
                        </div>
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => {
                          setLocationPopUP(false)
                          navigate('/?')
                          setLocation('')
                          setValue('')
                        }}>
                        </BootstrapDialogTitle>
                        <DialogContent>
                          <Stack spacing={1} sx={isMobile ? { width: "25ch", height: "auto", m: 1 } : { width: "42ch", height: '6ch', m: 1 }}  >
                            <Autocomplete
                              {...defaultProps}
                              freeSolo
                              selectOnFocus={false}
                              noOptionsText={'Enter your city'}
                              value={searchLocation}
                              autoSelect={true}
                              onClose={(e) => {
                                if (e.cancelable == false) {
                                  // setLocationPopUP(false)
                                  setValue('')
                                }
                              }}
                              id="disable-close-on-select"
                              onChange={(event: any, newValue: any) => {
                                console.log(event, "event onchange-----------");
                                handlevalue(newValue);
                                // setLocationPopUP(false)
                              }}
                              // openOnFocus
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  onChange={handleLocation}
                                  // label="Search"
                                  variant="standard"
                                  focused
                                // value={searchLocation}
                                // inputRef={input => {
                                //   inputRef = input;
                                // }}
                                />

                              )}

                            />
                          </Stack>
                        </DialogContent>
                        <DialogActions>
                        </DialogActions>
                      </Dialog>
                    </Box>

                  </div>
                </div>) : null}

            </>
          )}

          {/* < ------------------- location input field ---------------------> */}



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
                  <Link key="profile-menu" href={setting?.route}>
                    <MenuItem
                      key={setting.route}
                      onClick={() => {
                        setting?.title === "Logout" && auth?.signOut();
                        setting?.title === "Logout" &&
                          toast.success("You have successfully logged out!");
                        handleClose();
                      }}
                    >
                      <Typography textAlign="left" className="text-black ">
                        {setting?.title}
                      </Typography>
                    </MenuItem>
                  </Link>
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

                    return (
                      <div
                        className="Notification list w-[350px]  mx-2 px-2 py-2  shadow-md rounded-[6px] border-solid   my-2 "
                        key={i}
                      >
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
                                  format(new Date(res.dDate), "MMMM dd, yyyy")}
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
                                  {res.vDesc.length > 55 ? (
                                    <div>
                                      <span
                                        className="text-[14px] w-[50px]  text-[#2196F3] cursor-pointer font-medium "
                                        onClick={() =>
                                          setReadMoreNotification({
                                            state: false,
                                            id: res.iNotificationId,
                                          })
                                        }
                                      >
                                        {" "}
                                        Read Less
                                      </span>
                                      <span
                                        className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal  "
                                        onClick={() => {
                                          readNotification({
                                            id: res.iNotificationId,
                                            readId: 1,
                                          });
                                        }}
                                      >
                                        Mark read
                                      </span>
                                    </div>
                                  ) : (
                                    <span
                                      className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal  "
                                      onClick={() => {
                                        readNotification({
                                          id: res.iNotificationId,
                                          readId: 1,
                                        });
                                      }}
                                    >
                                      Mark read
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <div className="">
                                  <span className="NotextLimit2">
                                    {res.vDesc}
                                  </span>
                                  {res.vDesc.length > 55 ? (
                                    <div className="">
                                      <span
                                        className="text-[14px] w-[50px]  text-[#2196F3] cursor-pointer  font-medium"
                                        onClick={() =>
                                          setReadMoreNotification({
                                            state: true,
                                            id: res.iNotificationId,
                                          })
                                        }
                                      >
                                        {" "}
                                        ...Read More
                                      </span>
                                      <span
                                        className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal"
                                        onClick={() => {
                                          readNotification({
                                            id: res.iNotificationId,
                                            readId: 1,
                                          });
                                        }}
                                      >
                                        Mark read
                                      </span>
                                    </div>
                                  ) : (
                                    <span
                                      className="text-[14px] w-[50px] ml-2 text-[#2196F3] border-[0.1px] border-[#2196F3] px-2  rounded-[10px] cursor-pointer font-normal  "
                                      onClick={() => {
                                        readNotification({
                                          id: res.iNotificationId,
                                          readId: 1,
                                        });
                                      }}
                                    >
                                      Mark read
                                    </span>
                                  )}
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

        {props?.userMenu == true && categoryData?.length > 0 && (
          <animated.div style={{ overflow: "hidden", ...spring }}>
            <Toolbar>
              <div className="moblieMenu ">
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
                  {categoryData?.map((item: any, index: any) =>
                    index === 0 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}

                        </Link>
                      </ListItem>
                    ) : index === 1 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 2 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 3 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 4 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 5 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : index === 6 ? (
                      <ListItem key={index}>
                        <Link
                          href={`/category/${item?.iCategoryId}`}
                          onClick={handleBanner}
                          className='p-[10px]'
                        >
                          {item?.vName}
                        </Link>
                      </ListItem>
                    ) : null
                    //  (
                    //   index === 7 && (
                    //     <ListItem>
                    //       <Link onClick={handleBanner} className='p-[10px]'>
                    //         {"More"}
                    //       </Link>
                    //     </ListItem>
                    //   )
                    // )
                  )}

                  {/* {isMobile && (homepage == "/" || routeAdmin == "category") ? (
                    <ListItem className="">
                      <Box
                        sx={{ display: { xs: "Block", md: "flex" } }}
                        className="w-[100%]  mt-2"
                      >

                        <Button

                          onClick={showLocationPopUp}
                          disableRipple
                          sx={{ color: "text.primary" }}
                          className={`${locationPopUp == false ? '!block' : '!hidden'}`}
                        >
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            size="sm"
                            style={{ marginRight: "8px" }}
                          />
                          Location
                        </Button>

                        <Stack spacing={1} className={`${locationPopUp == true ? '!block' : '!hidden'} w-[100%] my-3`}>
                          <Autocomplete
                            {...defaultProps}
                            selectOnFocus={false}
                            openOnFocus
                            noOptionsText={'Enter your city'}
                            autoSelect={true}
                            id="disable-close-on-select"
                            onClose={(e) => {
                              if (e.cancelable == false) {
                                setLocationPopUP(false)
                              }
                            }}
                            //  onClick={disableCloseOnSelect}
                            onChange={(event, newValue: any) => {
                              console.log(event, "event onchange");
                              setOpen(false);
                              handlevalue(newValue);
                              setLocationPopUP(false)
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                onChange={handleLocation}
                                label="Search"
                                variant="standard"
                                inputRef={input => {
                                  inputRef = input;
                                }}

                              />
                            )}
                          />
                        </Stack>

                      </Box>
                    </ListItem>
                  ) : null} */}

                  {!auth.isAuthenticated && isMobile ? (<ListItem className=" rounded-[10px] my-5">
                    <div className="w-full grid grid-cols-2 gap-4">
                      <Button

                        variant="contained"
                        sx={{ minWidth: "80px" }}
                        onClick={() => {
                          navigate(AuthRoutePathEnum.SIGN_IN);
                          setOpen(false)
                        }}
                      >
                        Log In
                      </Button>
                      <Button

                        variant="contained"
                        sx={{ minWidth: "80px" }}
                        onClick={() => {
                          navigate(AuthRoutePathEnum.SIGN_UP);
                          setOpen(false)
                        }}
                      >
                        Sign up
                      </Button>
                    </div>

                  </ListItem>)
                    : null}
                </List>
              </div>
            </Toolbar>
          </animated.div>
        )}

        {/* <<<<<<<<<<<<<<<< ---------admin list dropdown --------------->>>>>>>>>>>>>>. */}

        {routeAdmin == "admin" && isMobile && open && (
          <animated.div
            style={{ overflow: "hidden", ...spring2 }}
            className="mt-[-60px]"
          >
            <Toolbar className="toolbarAdminMenu">
              <div className="moblieMenu">
                <List
                  className=""
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    ".MuiListItem-root": {
                      minWidth: "fit-content",
                      cursor: "pointer",
                    },
                  }}
                >

                  <List className="">
                    {menuList.map((item, index) => (
                      <Link
                        // to={item.route}
                        onClick={handleBanner}
                        href={`${item.route}`}
                        key={item.title}
                        style={{
                          color: theme.palette.getContrastText(
                            theme.palette.background.default
                          ),
                          textDecoration: "none",
                        }}
                      >
                        <ListItem
                          key={index}
                          disablePadding
                          className={`${props.menu == item.title ? "bg-[#c9c8c8]" : ""
                            } px-8 py-1`}
                        >

                          <ListItemButton
                            onClick={() => {
                              props.handleActive(item?.title);
                            }}
                          >
                            <ListItemIcon>
                              <FontAwesomeIcon icon={item?.icon} />
                            </ListItemIcon>
                            <ListItemText primary={item?.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>

                  {/* {isMobile ?
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
                      </Box>
                    </ListItem> : null} */}

                  {/* <ListItem className=" rounded-[10px] my-5">

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

                  </ListItem> */}
                </List>
              </div>
            </Toolbar>
          </animated.div>
        )}
      </AppBar>
      <Backdrop
        open={open}
        sx={{ zIndex: 999 }}
        onClick={() =>
          setOpen(false)
        }
      />
    </>
  );
};
function showInput(): void {
  throw new Error("Function not implemented.");
}

