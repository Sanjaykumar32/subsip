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
import { Link, Outlet } from "react-router-dom";
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
import {
  Badge,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AdminRoutePathEnum } from "enum";
import { UserAppBar } from "components/appbar/appbar.v2";

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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
    <div>
      <Toolbar />
      {isMobile && (
        <TextField
          fullWidth
          size="small"
          label="Search Listings"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FontAwesomeIcon icon={faSearch} />
              </InputAdornment>
            ),
          }}
          sx={{ my: 2, px: 1 }}
        />
      )}
      <Divider />
      <List>
        {menuList.map((item, index) => (
          <Link
            to={item.route}
            key={item.title}
            style={{
              color: theme.palette.getContrastText(
                theme.palette.background.default
              ),
              textDecoration: "none",
            }}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
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

      <UserAppBar userMenu={false} display={'adminHeader'} />
      {/* <div className="pt-[200px]"> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: '-0 ', position: "sticky" }}
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
              // top: '75px !important'
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
              top: '75px',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className='headerTop'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      {/* </div> */}
    </Box >



  );
}
