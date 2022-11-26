import React, { useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Badge, Divider, TextField } from "@mui/material";
import { Link } from "@mui/material";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const notification = [{ title: "You just won a Promo Code!!" }];

export function ResponsiveAppBar() {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const [anchorElSetting, setAnchorElSetting] = useState<null | HTMLElement>(
    null
  );
  const [anchorElNotification, setAnchorElNotification] =
    useState<null | HTMLElement>(null);

  const Logo = useMemo(
    () => (
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PoshSub
      </Typography>
    ),
    []
  );

  const MobileLogo = useMemo(
    () => (
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    ),
    []
  );

  const MobileMenu = useMemo(
    () => (
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={(event) => setAnchorElMenu(event.target as HTMLElement)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElMenu)}
          onClose={() => setAnchorElMenu(null)}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={() => setAnchorElMenu(null)}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    ),
    [anchorElMenu]
  );

  const DesktopMenu = useMemo(
    () => (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <TextField
          fullWidth
          size="small"
          sx={{ mx: "auto", maxWidth: "400px" }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <FontAwesomeIcon icon={faSearch} size="sm" />
              </IconButton>
            ),
          }}
        />
      </Box>
    ),
    []
  );

  const ActionMenu = useMemo(
    () => (
      <Menu
        id="menu-appbar"
        anchorEl={anchorElSetting}
        open={Boolean(anchorElSetting)}
        onClose={() => setAnchorElSetting(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: -10,
          horizontal: 68,
        }}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            //onClick={(event) => setAnchorElSetting(event.target as HTMLElement)}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    ),
    [anchorElSetting]
  );

  const NotificationMenu = useMemo(
    () => (
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNotification}
        open={Boolean(anchorElNotification)}
        onClose={() => setAnchorElNotification(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: -10,
          horizontal: 68,
        }}
      >
        {notification.map((notification) => (
          <MenuItem sx={{ width: "400px" }} key={notification.title}>
            <Typography textAlign="center">{notification.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    ),
    [anchorElNotification]
  );

  const Actions = useMemo(
    () => (
      <Box
        sx={{
          display: "flex",
          flexGrow: 0,
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Tooltip title="Open settings">
          <IconButton
            onClick={(event) =>
              setAnchorElNotification(event.target as HTMLElement)
            }
            sx={{ p: 0, mx: 1.5 }}
          >
            <Badge badgeContent={4} color="error">
              <FontAwesomeIcon icon={faBell} />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Open settings">
          <IconButton
            onClick={(event) => setAnchorElSetting(event.target as HTMLElement)}
            sx={{ p: 0, mx: 1.5 }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Divider
          flexItem
          variant="middle"
          orientation="vertical"
          sx={{ mx: 2 }}
        />
        <Link href="/listing/add">List on PoshSub</Link>
        <Divider
          flexItem
          variant="middle"
          orientation="vertical"
          sx={{ mx: 2 }}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <FontAwesomeIcon icon={faLocationDot} size="1x" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            Seattle, WA
          </Typography>
        </Box>
        {ActionMenu}
        {NotificationMenu}
      </Box>
    ),
    [ActionMenu, NotificationMenu]
  );

  return (
    <AppBar color="default" position="static" elevation={0}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {Logo}
          {DesktopMenu}
          {MobileMenu}
          {MobileLogo}
          {Actions}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
