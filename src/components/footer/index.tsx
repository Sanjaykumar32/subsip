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
  borderRedius: '0px',
}));

export function FooterMain() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <FooterContainer>
        <Container maxWidth="lg" disableGutters>
          <Grid container>
            {isMobile && (
              <Grid item>
                <Box>
                  <Logo />
                  <Typography> Free certificates from businesses you love </Typography>
                </Box>
              </Grid>
            )}
            <Grid item xs={12} md={4} order={{ xs: 2, md: 0 }}>
              {!isMobile && (
                <Box sx={{ mb: 2 }}>
                  <Logo />
                  <Typography> Free certificates from businesses you love  </Typography>
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

      <div className="grid grid-cols-2 px-[60px] py-[10px] bg-[#2C2E30]">
        <div className="flex justify-start">
          <p className="text-[#ffffff]">Copyright  2023. All rights reserved.</p>
        </div>
        <div className="flex justify-end">
          <ul className="flex gap-[15px]  text-[#ffffff]">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
      </div>

    </div>
  );
}
