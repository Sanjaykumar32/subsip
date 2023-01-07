import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { SearchField } from "./component/search-field/search-field";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const UserAppBar = () => {
  const theme = useTheme();
  const auth = useAuth();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorNoticationEl, setAnchorNoticationEl] = React.useState<null | HTMLElement>(null);
  const [menuItem, setMenuItem] = useState<any>([]);
  const [locationPopUp, setLocationPopUP] = useState<any>(false)
  const [searchLocation, setLocation] = useState<any>('')
  const navigate = useNavigate();

  const opens = Boolean(anchorEl);
  const openNotification = Boolean(anchorNoticationEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNoticationEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorNoticationEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showLocationPopUp = () => {
    setLocationPopUP(true)
  }

  const handleLocationClose = () => {
    setLocation('')
    setLocationPopUP(false)
    navigate(`/?`);
  }

  const handleLocation = (event: any) => {
    setLocation(event.target.value)
    navigate(`/?${event.target.value}`);
  }

  const handleLocationSearch = () => {
    navigate(`/?${searchLocation}`);
    setLocationPopUP(false)
  }

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId === "4") {
      const data = [
        {
          title: "DashBoard",
          route: AdminRoutePathEnum.ADMIN,
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
    } else {
      // setAuthenticated(false);
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
          title: "Logout",
          route: AuthRoutePathEnum.SIGN_IN,
        },
      ];
      setMenuItem(data);
    }
  }, []);

  const settings = [
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
  // );

  const [open, setOpen] = useState<boolean>(false);
  const spring = useSpring({
    from: { height: "0px" },
    to: { height: !isMobile ? "60px" : open ? "250px" : "0px" },
  });



  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    // console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "is-sticky" : " ";
    setSticky(stickyClass);
    // console.log(stickyClass);
  };


  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.appBar, backgroundColor: 'white', boxShadow: '0 1px 20px 0 #91919175', position: 'relative '
        }}
        className={`${sticky} non-sticky `}
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

          <div className="w-[100%] flex justify-center ">
            <Logo variant="dark" />
          </div>
          {auth.isAuthenticated ? (
            <IconButton>
              <Badge badgeContent={2} color="error">
                <FontAwesomeIcon icon={faUser} />
              </Badge>
            </IconButton>
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
        </Toolbar>
        <Toolbar
          sx={{
            px: 4,
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
          className='topheader'
        >
          <Box sx={{ display: { xs: "none", md: "block" } }} >
            <Logo variant="dark" />
          </Box>

          <SearchField />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!locationPopUp ?
              <Button
                onClick={showLocationPopUp}
                disableRipple
                sx={{ minWidth: "120px", color: "text.primary" }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="sm"
                  style={{ marginRight: "8px" }}
                />Location
              </Button>
              :
              // <Box className="search">
              //   <TextField id="standard-basic" label="Standard" variant="standard" />
              //   <DialogActions>
              //   <Button onClick={handleLocationClose}>Cancel</Button>
              // </DialogActions>
              // </Box>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Search</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={'text'}
                  onChange={handleLocation}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      >
                        <Button onClick={handleLocationClose}>Cancel</Button>
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            }


            {/* <Divider
              flexItem
              orientation="vertical"
              variant="middle"
              sx={{ mx: 1, height: "30px", my: "auto" }}
            />
            <Button
              disableRipple
              sx={{ minWidth: "120px", color: "text.primary" }}
            >
              List on Poshhub
            </Button> */}
            <Divider
              flexItem
              orientation="vertical"
              variant="middle"
              sx={{ mx: 1, height: "30px", my: "auto" }}
            />
          </Box>
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
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
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
                      <Typography textAlign="center" className="text-black ">
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
                <Badge badgeContent={2} color="error">
                  <FontAwesomeIcon icon={faBell} />
                </Badge>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorNoticationEl}
                open={openNotification}
                onClose={handleNotificationClose}
                className="Notification-popup"
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}

                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* {menuItem.map((setting: any) => ( */}
                <MenuItem
                  // key={setting.route}
                  onClick={() => {
                    // setting.title === "Logout" && auth.signOut();
                    handleNotificationClose();
                  }}
                >
                  <div className="Notification list w-[250px] " >
                    <div className="flex w-full gap-[15px] ">
                      <li className="w-[70%] text-black cursor-pointer text-[16px] " >This is Dummy text</li>
                      <span className="w-[30%] text-center text-[15px] " >Read</span>
                    </div>
                  </div>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
        <animated.div style={{ overflow: "hidden", ...spring }}>
          <Toolbar>
            <div className="moblieMenu">
              <List

                className="categoryListing"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  ".MuiListItem-root": {
                    minWidth: "fit-content",
                    cursor: "pointer",
                  },
                }}
              >
                <ListItem>
                  <Link href={RoutePathEnum.LISTING}>Restaurant</Link>
                </ListItem>
                <ListItem>
                  <Link href={RoutePathEnum.HOME}>Home Services</Link>
                </ListItem>
                <ListItem>
                  <Link>Auto Services</Link>
                </ListItem>
                <ListItem>
                  <Link>More</Link>
                </ListItem>
              </List>

              {!auth.isAuthenticated ? (
                <Button
                  variant="contained"
                  sx={{
                    minWidth: "100px",
                    display: { xs: "block", md: "none" },
                  }}
                  onClick={() => {
                    navigate(AuthRoutePathEnum.SIGN_IN);
                  }}
                >
                  Log In
                </Button>
              ) : (
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton sx={{ mx: 1 }}>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </IconButton>
                  <IconButton sx={{ mx: 1 }}>
                    <Badge badgeContent={2} color="error">
                      <FontAwesomeIcon icon={faBell} />
                    </Badge>
                  </IconButton>
                </Box>
              )}
            </div>
          </Toolbar>
        </animated.div>
      </AppBar>
      <Backdrop
        open={open}
        sx={{ zIndex: theme.zIndex.appBar - 1 }}
        onClick={() => setOpen(false)}
      />
    </>
  );
};
