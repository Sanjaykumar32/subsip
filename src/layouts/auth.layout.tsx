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
import { Outlet } from "react-router-dom";

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
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "Kessel",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PoshSub
          </Typography>
          <Button variant="rounded" href="/signIn">
            Log in
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
