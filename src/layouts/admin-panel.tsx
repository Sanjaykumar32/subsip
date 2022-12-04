import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBell,
  faDiagramProject,
  faEllipsisV,
  faEllipsisVertical,
  faHome,
  faList,
  faSearch,
  faTrophy,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  CssBaseline,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "components";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

const drawerWidth = 200;

export function AdminLayout() {
  const theme = useTheme();
  const menuList = useMemo(
    () => [
      {
        title: "Dashboard",
        icon: faHome,
      },
      {
        title: "Listing",
        icon: faList,
      },
      {
        title: "Subscribers",
        icon: faHome,
      },
      {
        title: "Categories",
        icon: faUser,
      },
      {
        title: "Notifications",
        icon: faBell,
      },
      {
        title: "Rewards",
        icon: faTrophy,
      },
      {
        title: "Referrals",
        icon: faDiagramProject,
      },
    ],
    []
  );

  const close =
    "fixed top-0 left-0 w-0 h-screen text-white  bg-white opacity-0 transition-all duration-500 transform translate-x-[-100%]";
  const open =
    "fixed top-0 left-0 w-[100%]  shadow-lg h-screen text-white bg-white opacity-1 transition-all duration-500 translate-x-0";

  const [openBar, setOpenBar] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="default"
        variant="outlined"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Kessel",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PoshSub
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setOpenBar(!openBar)}
            />
          </Box>
          <TextField
            size="small"
            sx={{ width: "50%" }}
            label="Search Listings"
            InputProps={{
              sx: { borderRadius: "60px" },
              endAdornment: (
                <InputAdornment position="end" sx={{ mx: 1 }}>
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Badge badgeContent={5} color="primary" sx={{ mx: 2 }}>
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Badge>
            <FontAwesomeIcon
              icon={faUserCircle}
              size="xl"
              style={{ margin: theme.spacing(0, 2) }}
            />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
          {openMenu && (
            <div className="relative">
              <div className="bg-white shadow-sm flex gap-2 mt-5  flex-col absolute right-[-20px] top-5">
                <Badge badgeContent={5} color="primary" sx={{ mx: 2 }}>
                  <FontAwesomeIcon icon={faBell} size="lg" />
                </Badge>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="xl"
                  style={{ margin: theme.spacing(0, 2) }}
                />
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div className={`${openBar ? open : close}`}>
        <List>
          {menuList.map((element) => (
            <Link
              key={element.title}
              sx={{
                color: theme.palette.getContrastText(
                  theme.palette.background.default
                ),
              }}
            >
              <ListItem>
                <FontAwesomeIcon icon={element.icon} />
                <ListItemText sx={{ mx: 1 }} primary={element.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "flex" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuList.map((element) => (
              <Link
                key={element.title}
                sx={{
                  color: theme.palette.getContrastText(
                    theme.palette.background.default
                  ),
                }}
              >
                <ListItem>
                  <FontAwesomeIcon icon={element.icon} />
                  <ListItemText sx={{ mx: 1 }} primary={element.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
