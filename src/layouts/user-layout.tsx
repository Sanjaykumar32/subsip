import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { FooterContainer, Links, Logo, ScrollToTop, Social } from "components";
import {
  Container,
  Paper,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

export function NavigationBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container disableGutters={isMobile} maxWidth="xl" sx={{ height: "100vh" }}>
      <ScrollToTop />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
          <Button variant="rounded" href="/signIn" >Log in</Button>
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
