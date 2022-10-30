import { useMemo } from "react";
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
    alignItems: "center",
  },
}));

export function Links() {
  const links = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <LinkBox container>
      {links.map((data, index: number) => (
        <Grid item key={`${data.title}-${index}`} xs={12} sm={6} md={3}>
          <List>
            <ListBox>
              <Typography fontWeight="600" sx={{ fontSize: "21px" }}>
                {data.title}
              </Typography>
              {data.subTitle.map((subData) => (
                <Link href={subData.link}>
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
      ))}
    </LinkBox>
  );
}
