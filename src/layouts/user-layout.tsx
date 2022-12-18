import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { FooterMain, ScrollToTop } from "components";
import ResponsiveAppBar from "components/appbar/navigation";

export function NavigationBar() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <ResponsiveAppBar />
      <ScrollToTop />
      <Outlet />
      <FooterMain />
    </Container>
  );
}
