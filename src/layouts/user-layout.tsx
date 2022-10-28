import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Paper, Button, List, Box, IconButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Logo } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export function ScrollToTop() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "5%",
        right: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1"> Scroll to Top </Typography>
      <IconButton>
        <FontAwesomeIcon icon={faCircleChevronUp} inverse />
      </IconButton>
    </Box>
  );
}

const links = () => {
  const links = [
    {
      title: "Account",
      subTitle: [
        {
          title: "Account",
          link: "/account",
        },
        {
          title: "Privacy",
          link: "/privacy",
        },
        {
          title: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "PoshSub",
      subTitle: [
        {
          title: "About",
          link: "/about",
        },
        {
          title: "Referal",
          link: "/referal",
        },
      ],
    },
    {
      title: "List",
      subTitle: [
        {
          title: "List your Buisness",
          link: "/join",
        },
        {
          title: "Remove your Buisness",
          link: "/leave",
        },
      ],
    },
  ];

  return (
    <>
      {links.map((data) => (
        <List sx={{ marginRight: "112px" }}>
          <Typography fontWeight="600" sx={{ fontSize: "21px" }}>
            {data.title}
          </Typography>
          {data.subTitle.map((subData) => (
            <Link to={subData.link} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: "17px",
                  color: "#fff",
                  mt: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {subData.title}
              </Typography>
            </Link>
          ))}
        </List>
      ))}
    </>
  );
};

const social = () => {
  const socialIcons = [
    {
      icon: faInstagram,
      link: "https://instagram.com",
    },
    {
      icon: faTwitter,
      link: "https://twitter.com",
    },
    {
      icon: faYoutube,
      link: "https://youtube.com",
    },
    {
      icon: faFacebook,
      link: "https://facebook.com",
    },
    {
      icon: faTiktok,
      link: "https://tiktok.com",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Logo />
      <Typography variant="body1" sx={{ mt: 1, mb: 2, fontSize: "17px" }}>
        Reward for Subscribers
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {socialIcons.map((data) => (
          <IconButton
            onClick={() => (window.location.href = data.link)}
            sx={{ marginRight: "12px" }}
          >
            <FontAwesomeIcon
              style={{ width: "32px", height: "32px" }}
              fixedWidth
              inverse
              icon={data.icon}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export function NavigationBar() {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
          <Button variant="contained">Log in</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Paper
        sx={{
          px: 3,
          backgroundColor: "#2C2E30",
          color: "#fff",
          height: "391px",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "left",
            mt: 6,
          }}
        >
          <Box sx={{ flex: 5 }}>{social()}</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "top",
              flex: 8,
              ml: 6,
            }}
          >
            {links()}
          </Box>
        </Box>
        <ScrollToTop />
      </Paper>
    </Container>
  );
}
