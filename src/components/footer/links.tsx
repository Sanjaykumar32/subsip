import React, { useMemo } from "react";
import { Link, Grid, List, styled, Typography, Box } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "theme";
// import appleImage from "/public/static/apple.png"
import appleImage from "../../assets/images/apple.png"
import androidImage from '../../assets/images/android.jpeg'

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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
        title: "Subsip",
        subTitle: [
          {
            title: "About",
            link: "/about",
          },
          {
            title: "Blog",
            link: "/referal",
          },
          // {
          //   title: 'FAQs',
          //   link:'/',
          // }
        ],
      },
      {
        title: "Business",
        subTitle: [
          {
            title: "Partners",
            link: "/listing/add",
          },
          {
            title: "Contact Us",
            link: "/",
          },
        ],
      },
      // {
      //   title: 'coming soon',
      //   subTitle: [
      //     {
      //       title: <img src={appleImage} alt="" className='h-[32px]' />,
      //       link: "/",
      //     },
      //     {
      //       title: <img src={androidImage} alt="" className='h-[31px]' />,
      //       link: "/",
      //     },
      //   ]
      // }
    ],
    []
  );

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LinkBox container spacing={4} className={`${isMobile ? 'justify-between': ''}`}>
      {links.map((data, index: number) => {
        return (
          <Grid key={`Links-${data.title}-${index}}`} item sm={6} md={3}>
            <List>
              <ListBox>
                <Typography fontWeight="600" sx={{ fontSize: "21px" }}>
                  {data.title}
                </Typography>
                {data?.subTitle.map((subData) => (
                  <li
                    onClick={scrollToTop}
                    key={`Sub-Links-${subData.title}-${index}}`}
                  >
                    {subData.title === "Contact Us" ? (
                      <Typography className="!mt-[8px]">
                        <a
                          href={`mailto: info@subsip.com?subject=  I have a question`}
                          className="cursor-pointer"
                        >
                          {subData.title}
                        </a>
                      </Typography>
                    ) : (
                      <Link href={subData.link}>
                        <Typography
                          sx={{
                            fontSize: "17px",
                            color: "#fff",
                            mt: 1,
                            whiteSpace: "nowrap",
                          }}
                          className='flex justify-start align-center text-center'
                        >
                          {/* {subData.title == 'IOS'
                           && 
                          //  <AppleIcon className='!h-[25px] !w-[25px] mr-1'/>
                          <img src={appleImage} alt=""  className='h-[32px]'/>
                           }
                          {subData.title == 'Android' &&
                           <img src={androidImage} alt=""  className='h-[31px]'/>
                          //  <AndroidIcon className='!h-[25px] !w-[25px] mr-1'/>
                           } */}
                          {subData.title}

                        </Typography>
                      </Link>
                    )}
                  </li>
                ))}
              </ListBox>
            </List>
          </Grid>
        );
      })}
    </LinkBox>
  );
}
