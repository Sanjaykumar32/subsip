import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDiagramProject,
  faHome,
  faList,
  faSearch,
  faTrophy,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Badge, InputAdornment, TextField, useTheme } from "@mui/material";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export function AdminLayout(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuList = React.useMemo(
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

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuList.map((text, index) => (
          <Link
            key={text.title}
            sx={{
              color: theme.palette.getContrastText(
                theme.palette.background.default
              ),
            }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={text.icon} />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        color="default"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
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
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
