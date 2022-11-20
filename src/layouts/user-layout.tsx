import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Container,
  Button,
  Grid,
  Divider,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Badge,
  List,
  ListItem,
} from "@mui/material";
import { FooterContainer, Logo, ScrollToTop, Social } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faLocationDot,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { RoutePathEnum } from "enum";

export function NavigationBar() {
  const links = [
    {
      name: "Restaurant",
      url: RoutePathEnum.RESTAURANT,
    },
    {
      name: "Home Services",
      url: RoutePathEnum.RESTAURANT,
    },
    {
      name: "Auto Services",
      url: RoutePathEnum.RESTAURANT,
    },
    {
      name: "More",
      url: RoutePathEnum.RESTAURANT,
    },
  ];
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <ScrollToTop />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Toolbar>
          <Logo />
          <TextField
            fullWidth
            sx={{ maxWidth: "50%", mx: "auto" }}
            size="small"
            InputProps={{
              sx: { p: 0, borderRadius: "60px" },
              startAdornment: (
                <Box>
                  <Select
                    value={"All"}
                    size="small"
                    sx={{
                      borderRadius: "60px 0px 0px 60px",
                      mr: 1,
                    }}
                  >
                    <MenuItem value="All"> All </MenuItem>
                  </Select>
                </Box>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ mx: 1 }}>
                  <IconButton>
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Search Listing"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box sx={{ mx: 2 }}>
              <FontAwesomeIcon icon={faLocationDot} /> Seattle, WA
            </Box>
            <Divider />
            <Box sx={{ mx: 2 }}>
              <Link>List on PoshSub</Link>
            </Box>
            <Divider />
            <Button variant="rounded">Login</Button>
            <Box sx={{ mx: 1 }}>
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </Box>
            <Box sx={{ mx: 1 }}>
              <Badge badgeContent={4} color="error">
                <FontAwesomeIcon icon={faBell} size="lg" />
              </Badge>
            </Box>
          </Box>
        </Toolbar>
        <Container maxWidth="xl">
          <List sx={{ display: "flex" }}>
            {links.map((res) => (
              <ListItem
                key={res.name}
                sx={{ maxWidth: "150px", width: "fit-content" }}
              >
                {res.name}
              </ListItem>
            ))}
          </List>
        </Container>
      </AppBar>
      <Outlet />
      <FooterContainer>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Social />
          </Grid>
          <Grid item xs={12} md={8}>
            <Link />
          </Grid>
        </Grid>
      </FooterContainer>
    </Container>
  );
}
