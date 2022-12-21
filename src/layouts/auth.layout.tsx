import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { ScrollToTop, Logo, FooterContainer, Social, Links } from "components";
import { Link, Outlet } from "react-router-dom";
import { AuthRoutePathEnum, RoutePathEnum } from "enum";
import { theme } from "theme";

export function AuthLayout() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ScrollToTop />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "Kessel",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            <Link
              to={RoutePathEnum.HOME}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              PoshSub
            </Link>
          </Typography>
          <Button variant="rounded">
            <Link
              to={AuthRoutePathEnum.SIGN_IN}
              style={{ textDecoration: "none", color: "black" }}
            >
              Log in
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
      <FooterContainer>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Social />
          </Grid>
          <Grid item xs={12} md={8}>
            <Links />
          </Grid>
        </Grid>
      </FooterContainer>
    </Container>
  );
}
