import React, { useCallback, useEffect } from "react";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { theme } from "theme";
import { AdminThunk } from "data/thunk/admin.thunk";
import { useAppDispatch, useAppSelector } from "data";
import { GET_DASHBOARD_COUNT } from "data/selectors";

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
  const dispatch = useAppDispatch();
  const dasboardCount = useAppSelector(GET_DASHBOARD_COUNT);
  console.log(dasboardCount, "dasboardCount ");

  const gatDasboardCount = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getdashboardCount());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    gatDasboardCount();
  }, [gatDasboardCount]);

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
              <Card
                sx={{
                  width: "300px",
                  borderRadius: "4px",
                  color: theme.palette.text.primary,
                  boxShadow:
                    "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
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
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
