import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { LocationCard1 } from "components/location/location-card-1";
import {
  Address,
  Info,
  Subscribe,
  Title,
} from "components/location/location-card";
import { Spacing } from "components";
import { useAuth } from "context/auth.context";

export function Home() {
  const data = {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2881&q=80",
    name: "India Gate Restaurant",
    location: "Seattle,WA",
    description:
      "Welcome to the India Gate Restaurant where we offer unique food.",
    subscribers: "46.2K subscribers",
    footer:
      "Claim FREE gift cards as they become available from the business listed above ",
  };

  const theme = useTheme();
  const auth = useAuth();

  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          textAlign: "center",
          height: "fit-content",
          backgroundColor: { xs: "white", md: "black" },
          p: 2,
        }}
      >
        <Carousel>
          {Array(12)
            .fill(data)
            .map((data) => (
              <Box key={data.name} sx={{ px: 7, pt: 7, pb: 3 }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                    xs={12}
                    md={7}
                    order={{ xs: 1, md: 0 }}
                  >
                    <Chip
                      label="Featured"
                      color="info"
                      size="small"
                      sx={{ borderRadius: "4px", fontWeight: 900, my: 2 }}
                    />
                    <Title
                      sx={{
                        color: { xs: "black", md: "white" },
                      }}
                    >
                      {data.name}
                    </Title>
                    <Address>{data.location}</Address>
                    <Box sx={{ pr: "35%" }}>
                      <Info
                        color="white"
                        sx={{
                          textAlign: "left",
                          mt: 1,
                          color: { xs: "black", md: "white" },
                        }}
                      >
                        {data.description}
                      </Info>
                    </Box>
                    <Subscribe
                      subsctibers={46.2}
                      color={theme.palette.info.light}
                      auth={auth}
                    />
                  </Grid>

                  <Grid item xs={12} md={5} order={{ xs: 0, md: 1 }}>
                    <Card sx={{ width: "100%", maxHeight: "300px" }}>
                      <img
                        src={data.image}
                        alt={data.name}
                        width="100%"
                        height="100%"
                        style={{ objectFit: "cover" }}
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </Carousel>
      </Box>
      <Container maxWidth={false} sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 900 }}>
          Seattle,WA
        </Typography>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100vw",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {Array(15)
            .fill(data)
            .map((data) => (
              <LocationCard1 key={data.name} data={data} />
            ))}
        </Container>
        <Spacing spacing={2} variant="bottom" />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100vw",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {Array(15)
            .fill(data)
            .map((data) => (
              <LocationCard1 key={data.name} data={data} />
            ))}
        </Container>
        <Spacing spacing={2} variant="bottom" />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100vw",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {Array(15)
            .fill(data)
            .map((data) => (
              <LocationCard1 key={data.name} data={data} />
            ))}
        </Container>

        <Box
          sx={{
            my: 6,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="rounded">Load More</Button>
        </Box>
      </Container>
    </Container>
  );
}
