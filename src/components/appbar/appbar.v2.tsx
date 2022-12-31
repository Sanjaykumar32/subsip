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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const UserAppBar = () => {
  const theme = useTheme();
  const auth = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuItem, setMenuItem] = useState<any>([]);
  const [locationPopUp, setLocationPopUP] = useState<any>(false)

  const opens = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showLocationPopUp = () => {
    setLocationPopUP(true)
  }

  const handleLocationClose = ()=> {
    setLocationPopUP(false)
  }

  const handleLocation = (event:any)=> {
  console.log(event.target.value ,'location value')
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
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.appBar,
        }}
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
        >
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Logo variant="dark" />
          </Box>

          <SearchField />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
              Seattle, WA
            </Button>
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
              <IconButton sx={{ mx: 1 }}>
                <Badge badgeContent={2} color="error">
                  <FontAwesomeIcon icon={faBell} />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
        <animated.div style={{ overflow: "hidden", ...spring }}>
          <Toolbar>
            <div className="moblieMenu">
              <List
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

      <Dialog open={locationPopUp} onClose={handleLocationClose} maxWidth='lg'>
        <DialogTitle>Search Location</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleLocation}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLocationClose}>Cancel</Button>
          <Button onClick={handleLocationClose}>Search</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
