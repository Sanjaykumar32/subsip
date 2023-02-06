import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Links } from "./links";
import { SocialIcons } from "./social";
import { Logo } from "components/logo";
import { useNavigate } from "react-router-dom";

export * from "./links";
export * from "./social";

export const FooterContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2C2E30",
  color: theme.palette.getContrastText("#2C2E30"),
  padding: theme.spacing(2, 3),
  minHeight: "291px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRedius: '0px !important',
}));



export function FooterMain() {
  const navigate = useNavigate()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const handleRoute = () => {
    navigate('/terms')
  }
  const handleRoutes = () => {
    navigate('/privacy')
  }
  return (
    <div>
      <FooterContainer className=" footerCss rounded-none " >
        <Container maxWidth="lg" disableGutters>
          <Grid container>
            {isMobile && (
              <Grid item className="">
                <Box className="">
                  <Logo />
                  <Typography className=""> Free certificates from businesses you love </Typography>
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={4} order={{ xs: 2, md: 0 }}>
              {!isMobile && (
                <Box sx={{ mb: 2 }}>
                  <Logo />
                  <Typography className=""> Free certificates from businesses you love  </Typography>
                </Box>
              )}
            
              <SocialIcons />
            </Grid>
            <Grid item xs={12} md={8} order={{ xs: 1, md: 1 }}>
              <Links />
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>


      {!isMobile ?
        <div className="grid-cols-2  px-[118px] grid  pt-[10px] pb-10 bg-[#2C2E30]">
          <div className="flex justify-start">
            <p className="text-[#ffffff]">Copyright  2023. All rights reserved.</p>
          </div>
          <div className={`${isMobile ? 'flex justify-start py-5' : "flex justify-end"}`}>
            <ul className="flex gap-[15px]  text-[#ffffff]">
              <li onClick={handleRoute} className='cursor-pointer '>Terms </li>
              <li>|</li>
              <li onClick={handleRoutes} className='cursor-pointer '>Privacy </li>
            </ul>

          </div>
        </div> :
        <div className=" flex pb-10 bg-[#2C2E30] justify-center">
          <div className="">
            <div className='my-4'>
              <ul className="flex justify-center gap-[15px]  text-[#ffffff]">
                <li onClick={handleRoute} className='cursor-pointer '>Terms </li>
                <li>|</li>
                <li onClick={handleRoutes} className='cursor-pointer '>Privacy </li>
              </ul>
            </div>
            <div className="">
              <p className="text-[#ffffff]">Copyright  2023. All rights reserved.</p>
            </div>
          </div>

        </div>

      }


    </div>
  );
}
