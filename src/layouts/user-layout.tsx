import * as React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container, Button, Grid } from "@mui/material";
import { FooterContainer, Links, Logo, ScrollToTop, Social } from "components";

export function NavigationBar() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <ScrollToTop />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
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
