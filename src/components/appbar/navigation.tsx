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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Divider,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "@mui/material";
import {
  faLocationDot,
  faSearch,
  faBell,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const pages = [
  { title: "Restaurant", path: "/" },
  { title: "Home Service", path: "/home" },
  { title: "Auto Service", path: "/list" },
  { title: "More", path: "/more" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const notification = [{ title: "You just won a Promo Code!!" }];

export function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [anchorElActionsMobileMenu, setAnchorElActionsMobileMenu] =
    useState<null | HTMLElement>(null);
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
          fontFamily: "Kessel",
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

  const SearchField = useMemo(
    () => (
      <TextField
        fullWidth
        size="small"
        sx={{ mx: "auto", maxWidth: "800px" }}
        InputProps={{
          sx: { borderRadius: "60px" },
          endAdornment: (
            <IconButton>
              <FontAwesomeIcon icon={faSearch} size="sm" />
            </IconButton>
          ),
        }}
      />
    ),
    []
  );

  const DesktopMenu = useMemo(() => {
    return pages.map((page) => {
      const isActive = window.location.pathname
        .toLowerCase()
        .includes(page.path.toLowerCase());

      return (
        <Link
          href={page.path}
          key={page.title}
          sx={{
            mr: 4,
            pb: 0.5,
            borderBottom: isActive
              ? `3px solid ${theme.palette.info.main}`
              : "",
          }}
        >
          <Typography color="text.primary" variant="body1" fontWeight="700">
            {page.title}
          </Typography>
        </Link>
      );
    });
  }, [theme.palette.info.main]);

  const MobilePoshSubLogo = useMemo(
    () => (
      <Box sx={{ flexGrow: 1, display: { md: "none", sm: "flex" } }}>
        <Typography
          variant="h5"
          component="a"
          sx={{
            fontFamily: "Kessel",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={(event) => setAnchorElMenu(event.target as HTMLElement)}
        >
          PoshSub
        </Typography>
      </Box>
    ),
    []
  );

  const MobileLogo = useMemo(
    () => (
      <Box sx={{ flexGrow: 1, display: { md: "none", sm: "flex" } }}>
        {SearchField}
      </Box>
    ),
    [SearchField]
  );

  const MobileMenu = useMemo(
    () => (
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(event) => setAnchorElMenu(event.target as HTMLElement)}
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
            <MenuItem key={page.title} onClick={() => navigate(page.path)}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    ),
    [anchorElMenu, navigate]
  );

  const AppbarCenter = useMemo(
    () => (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {SearchField}
      </Box>
    ),
    [SearchField]
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

  const ActionsList = useMemo(
    () => [
      <Tooltip key="notification-menu" title="Notifications">
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
      </Tooltip>,
      <Tooltip key="profile-menu" title="Open settings">
        <IconButton
          onClick={(event) => setAnchorElSetting(event.target as HTMLElement)}
          sx={{ p: 0, mx: 1.5 }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>,
      <Divider
        flexItem
        key="profile-divider"
        variant={isMobile ? "fullWidth" : "middle"}
        orientation={!isMobile ? "vertical" : "horizontal"}
        sx={{ width: { sm: "100%", md: "" }, mx: { sm: 0, md: 1 } }}
      />,
      <Link key="listing-new" href="/listing/add">
        List on PoshSub
      </Link>,
      <Divider
        flexItem
        key="listing-divider"
        variant={isMobile ? "fullWidth" : "middle"}
        orientation={!isMobile ? "vertical" : "horizontal"}
        sx={{ width: { sm: "100%", md: "" }, mx: { sm: 0, md: 1 } }}
      />,
      <Box
        key="location-selector"
        sx={{
          display: "flex",
        }}
      >
        <FontAwesomeIcon icon={faLocationDot} size="1x" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Seattle, WA
        </Typography>
      </Box>,
    ],
    [isMobile]
  );

  const Actions = useMemo(
    () => (
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexGrow: 0,
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        {ActionsList}
      </Box>
    ),
    [ActionsList]
  );

  const ActionMenuMobile = useMemo(
    () => (
      <>
        <IconButton
          sx={{
            display: { sm: "flex", md: "none" },
          }}
          onClick={(event) =>
            setAnchorElActionsMobileMenu(event.target as HTMLElement)
          }
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElActionsMobileMenu}
          open={Boolean(anchorElActionsMobileMenu)}
          onClose={() => setAnchorElActionsMobileMenu(null)}
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
          {ActionsList.map((element) => (
            <MenuItem
              sx={{ justifyContent: "center" }}
              key={element.key}
              onClick={element.props?.children?.props?.onClick}
            >
              {element}
            </MenuItem>
          ))}
        </Menu>
      </>
    ),
    [ActionsList, anchorElActionsMobileMenu]
  );

  return (
    <AppBar color="default" position="static" elevation={0}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {Logo}
          {AppbarCenter}
          {MobileMenu}
          {MobilePoshSubLogo}
          {Actions}
          {ActionMenuMobile}
        </Toolbar>
        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          {MobileLogo}
        </Toolbar>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{
            alignItems: "flex-end",
            display: { xs: "none", md: "flex" },
          }}
        >
          {DesktopMenu}
        </Toolbar>
      </Container>
      {ActionMenu}
      {NotificationMenu}
    </AppBar>
  );
}

export default ResponsiveAppBar;
