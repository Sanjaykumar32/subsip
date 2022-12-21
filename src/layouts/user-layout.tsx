import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { FooterMain, ScrollToTop } from "components";
import { UserAppBar } from "components/appbar/appbar.v2";

export function NavigationBar() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <UserAppBar />
      <Outlet />
      <ScrollToTop />
      <FooterMain />
    </Container>
  );
}
