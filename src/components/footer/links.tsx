import React, { useMemo } from "react";
import { Link, Grid, List, styled, Typography, Box } from "@mui/material";

const LinkBox = styled(Grid)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(0),
  },
}));

const ListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
    alignItems: "start",
  },
}));

export function Links() {
  const links = useMemo(
    () => [
      {
        title: "Account",
        subTitle: [
          {
            title: "Login",
            link: "/auth/sign-in",
          },
          {
            title: "Sign up",
            link: "/auth/sign-up",
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
        title: "Business",
        subTitle: [
          {
            title: "Advertisement",
            link: "/join",
          },
          {
            title: "Contact Us",
            link: "/",
          },
        ],
      },
    ],
    []
  );

  return (
    <LinkBox container spacing={4}>
      {links.map((data, index: number) => {
        return (
          <Grid key={`Links-${data.title}-${index}}`} item sm={6} md={3}>
            <List>
              <ListBox>
                <Typography fontWeight="600" sx={{ fontSize: "21px" }}>
                  {data.title}
                </Typography>
                {data.subTitle.map((subData) => (
                  <Link
                    href={subData.link}
                    key={`Sub-Links-${subData.title}-${index}}`}
                  >
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
              </ListBox>
            </List>
          </Grid>
        );
      })}
    </LinkBox>
  );
}
