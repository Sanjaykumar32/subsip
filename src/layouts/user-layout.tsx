import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { FooterContainer, Links, ScrollToTop, Social } from "components";
import ResponsiveAppBar from "components/appbar/navigation";

export function NavigationBar() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <ResponsiveAppBar />
      <ScrollToTop />
      <Outlet />
      <FooterContainer>
        <Container maxWidth="lg" disableGutters>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Social />
            </Grid>
            <Grid item xs={12} md={8}>
              <Links />
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
    </Container>
  );
}
