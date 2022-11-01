import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Container,
  Divider,
  TypographyProps,
  useTheme,
} from "@mui/material";
import { Card, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export function Location() {
  const theme = useTheme();
  const { id } = useParams();

  const name = `India Gate Restaurant ${id}`;
  const location = "Seattle, WA";
  const description =
    "Welcome to the India Gate Restaurant where we offer unique food.";
  const subscribers = 42.2;

  const Title = (props: TypographyProps) => (
    <Typography variant="h5" fontWeight={900} sx={{ mt: 2, mb: 1 }} {...props}>
      {name}
    </Typography>
  );

  const Address = () => (
    <Typography
      variant="body1"
      fontWeight={900}
      color={theme.palette.grey[600]}
    >
      {location}
    </Typography>
  );

  const Info = () => (
    <Typography variant="body1" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
      {description}
    </Typography>
  );

  const Subscribe = () => (
    <>
      <Box sx={{ my: 3 }}>
        <Typography
          variant="subtitle1"
          color={theme.palette.grey[600]}
          fontWeight={900}
        >
          {`${subscribers}k Subscribers`}
        </Typography>
      </Box>
      <Button
        size="large"
        variant="contained"
        color="error"
        sx={{ fontWeight: 800, borderRadius: "24px" }}
      >
        Subscribe Now
      </Button>
    </>
  );

  const CardFooter = () => (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[200],
        position: "absolute",
        bottom: 0,
      }}
    >
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{
          p: 3,
          textAlign: "center",
        }}
      >
        Claim FREE gift cards as they become available from the business listed
        above
      </Typography>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Title />
      <Address />
      <Info />

      <Grid container>
        <Grid item sm={12} md={8}>
          <Card sx={{ width: "100%", maxHeight: "500px" }}>
            <img
              alt={name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transform: "translateY(-240px)",
              }}
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80"
            />
          </Card>
        </Grid>
        <Grid item sm={12} md={4} sx={{ px: 2 }}>
          <Card elevation={3} sx={{ height: "100%", position: "relative" }}>
            <Box sx={{ p: 2, fontSize: theme.typography.h5.fontSize }}>
              <Box sx={{ display: "flex" }}>
                <span style={{ fontFamily: "Bree Serif" }}> PoshSub </span>{" "}
                <Divider
                  color="info"
                  sx={{ m: 1 }}
                  variant="middle"
                  orientation="vertical"
                  flexItem
                />
                <span
                  style={{
                    color: theme.palette.info.main,
                    fontFamily: "Josefin Slab",
                  }}
                >
                  RWEARDS
                </span>
              </Box>
              <Title />
              <Address />
              <Info />
              <Subscribe />
            </Box>
            <CardFooter />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography
              variant="body1"
              fontWeight={400}
              sx={{ my: 2, color: theme.palette.grey[600] }}
            >
              Scheduling a meeting shouldn’t require endless rounds of email tag
              just to find a time that works for all your stakeholders. (“Next
              month is a no-go, too. Should we try for 3 p.m. CT next year?”)
              It’s hard enough to find work-life balance when you’re manually
              coordinating across time zones and merging details from your work
              and personal calendars. You need a stress-free way to manage
              meetings across all your calendars.
            </Typography>
            <Typography variant="h6">
              Introducing{" "}
              <span style={{ color: theme.palette.info.main, fontWeight: 900 }}>
                {name}
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
