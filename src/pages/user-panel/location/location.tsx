import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { Card, Grid, Typography } from "@mui/material";
import {
  Location,
  Address,
  Info,
  Title,
} from "components/location/location-card";
import { GET_BUSINESS } from "data/selectors";
import { useAppSelector } from "data";
import { IBusiness } from "interface";

export function LocationPage() {
  const theme = useTheme();
  const bussinessByName = useAppSelector(GET_BUSINESS);
  console.log(bussinessByName, "BussinessByName");

  const name = `India Gate Restaurant`;
  const location = "Seattle, WA";
  const description =
    "Welcome to the India Gate Restaurant where we offer unique food.";
  const subscribers = 42.2;
  // const obj = { name, location, description, subscribers } as ILocationProps;

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Title>{name}</Title>
      <Address>{location}</Address>
      <Info>{description}</Info>

      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          {bussinessByName.map((res: IBusiness, index: number) => (
            <Card sx={{ width: "100%", maxHeight: "500px" }} key={index}>
              <img
                alt={name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={res.vImage}
              />
            </Card>
          ))}
        </Grid>
        <Grid item sm={12} md={4} sx={{ px: 2 }}>
          {bussinessByName.map((res: IBusiness, index: number) => {
            return <Location {...res} key={index} />;
          })}
        </Grid>
        <Grid item xs={12}>
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
