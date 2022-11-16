import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminDashboard() {
  return (
    <Container maxWidth="lg" sx={{ p: 4, my: 5 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <AdminSidebar />
        </Grid>
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: "flex",
              height: "100px",
              my: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.grey[900],
                width: "300px",
                borderRadius: "4px",
              }}
            >
              <Box sx={{ ml: 3, my: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: [600] }}
                >
                  Total listings
                </Typography>
                <Typography variant="h6" sx={{ color: "white", my: 1 }}>
                  150
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: theme.palette.grey[900],
                width: "300px",
                borderRadius: "4px",
                ml: 2,
              }}
            >
              <Box sx={{ ml: 3, my: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: [600] }}
                >
                  Total subscribers
                </Typography>
                <Typography variant="h6" sx={{ color: "white", my: 1 }}>
                  1,500,000
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100px",
              my: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.grey[900],
                width: "300px",
                borderRadius: "4px",
              }}
            >
              <Box sx={{ ml: 3, my: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: [600] }}
                >
                  Unverified subscribers
                </Typography>
                <Typography variant="h6" sx={{ color: "white", my: 1 }}>
                  22,577
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: theme.palette.grey[900],
                width: "300px",
                borderRadius: "4px",
                ml: 2,
              }}
            >
              <Box sx={{ ml: 3, my: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontWeight: [600] }}
                >
                  Pending listings
                </Typography>
                <Typography variant="h6" sx={{ color: "white", my: 1 }}>
                  77
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
