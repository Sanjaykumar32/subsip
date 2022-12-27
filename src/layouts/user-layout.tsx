import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { FooterMain, ScrollToTop } from "components";
import { UserAppBar } from "components/appbar/appbar.v2";
import ResponsiveAppBar from "components/appbar/navigation";

export function NavigationBar() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      {/* <UserAppBar /> */}
      <ResponsiveAppBar />
      <Outlet />
      <ScrollToTop />
      <FooterMain />
    </Container>
  );
}
