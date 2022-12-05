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
              fontFamily: "Kessel",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PoshSub
          </Typography>
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
          <Box>
            <Badge badgeContent={5} color="primary" sx={{ mx: 2 }}>
              <FontAwesomeIcon icon={faBell} size="lg" />
            </Badge>
            <FontAwesomeIcon
              icon={faUserCircle}
              size="xl"
              style={{ margin: theme.spacing(0, 2) }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
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
