import React, { useState } from "react";
import {
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
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faLocationDot,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "components/logo";
import { faBell, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "context/auth.context";
import { useSpring, animated } from "@react-spring/web";
import './appBar-v2-style.css';



export const UserAppBar = () => {
  const theme = useTheme();
  const auth = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState<boolean>(false);
  const spring = useSpring({
    from: { height: "0px" },
    to: { height: !isMobile ? "60px" : open ? "200px" : "0px" },
  });

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
          <IconButton onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faClose : faBars} size="sm" />
          </IconButton>

          <Logo variant="dark" />

          {/* {auth.isAuthenticated ? ( */}
          <IconButton>
            <Badge badgeContent={2} color="error">
              <FontAwesomeIcon icon={faUser} />
            </Badge>
          </IconButton>
          {/* ) : ( */}
          <Button
            variant="contained"
            sx={{
              minWidth: "fit-content",
              display: { xs: "block", md: "none" },
            }}
          >
            Log In
          </Button>
          {/* )} */}
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
          <TextField
            label="Search Listing"
            size="small"
            fullWidth
            sx={{ mx: { xs: 0, md: 4 } }}
            InputProps={{
              sx: { borderRadius: "20px" },
              endAdornment: <FontAwesomeIcon icon={faSearch} />,
            }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
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
            <Divider
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
            </Button>
            <Divider
              flexItem
              orientation="vertical"
              variant="middle"
              sx={{ mx: 1, height: "30px", my: "auto" }}
            />
          </Box>
          {/* {!auth.isAuthenticated ? ( */}
          <Button
            variant="contained"
            sx={{ minWidth: "100px", display: { xs: "none", md: "block" } }}
          >
            Log In
          </Button>
          {/* ) : ( */}
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
          {/* )} */}
        </Toolbar>
        <animated.div style={{ overflow: "hidden", ...spring }}>
          <Toolbar>
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
                <Link>Restaurant</Link>
              </ListItem>
              <ListItem>
                <Link>Home Services</Link>
              </ListItem>
              <ListItem>
                <Link>Auto Services</Link>
              </ListItem>
              <ListItem>
                <Link>More</Link>
              </ListItem>
            </List>
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
