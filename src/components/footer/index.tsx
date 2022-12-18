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
  // position: "relative",
  // display: "flex",
  // flexDirection: "column",
  // flexWrap: "wrap",
  // justifyContent: "left",
  // marginTop: "auto",
  // [theme.breakpoints.down("md")]: {
  //   padding: theme.spacing(1),
  //   marginTop: theme.spacing(2, 0),
  //   flexDirection: "column",
  // },
}));

export function FooterMain() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FooterContainer>
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item>
            {isMobile && (
              <Box>
                <Logo />
                <Typography> Reawrds on Subscription </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 2, md: 0 }}>
            {!isMobile && (
              <Box sx={{ mb: 2 }}>
                <Logo />
                <Typography> Reawrds on Subscription </Typography>
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
  );
}
