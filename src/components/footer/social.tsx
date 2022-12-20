import React, { useMemo } from "react";
import { Box, IconButton, styled, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const SocialBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const IconList = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "start",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export function SocialIcons() {
  const socialIcons = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <IconList container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {socialIcons.map((data, index: number) => (
        <Grid item key={`Social-${data.link}-${index}`}>
          <IconButton onClick={() => (window.location.href = data.link)}>
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px" }}
              fixedWidth
              inverse
              icon={data.icon}
            />
          </IconButton>
        </Grid>
      ))}
    </IconList>
  );
}
