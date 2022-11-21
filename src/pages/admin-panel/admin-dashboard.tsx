import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { theme } from "theme";

export function AdminDashboard() {
  const data = [
    {
      title: "Total listings",
      count: "150",
    },
    {
      title: "Total subscribers",
      count: "1,500,000 ",
    },
    {
      title: "Unverified subscribers",
      count: "22,577",
    },
    {
      title: "Pending listings ",
      count: "77",
    },
  ];
  return (
    <Container maxWidth="sm" disableGutters sx={{ m: 0 }}>
      <Grid container spacing={2}>
        {data.map((data) => (
          <Grid item key={data.title} xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                height: "100px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.grey[900],
                  width: "300px",
                  borderRadius: "4px",
                  color: theme.palette.common.white,
                }}
              >
                <Box sx={{ ml: 3, my: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: [600],
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      my: 1,
                    }}
                  >
                    {data.count}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
