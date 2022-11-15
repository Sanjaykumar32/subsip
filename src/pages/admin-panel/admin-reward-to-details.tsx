import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminRewardToDetails() {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <AdminSidebar />
        </Grid>
        <Grid item xs={12} md={10}>
          <Container sx={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                ml: 90,
              }}
            >
              <Button
                size="large"
                sx={{
                  fontWeight: 800,
                  backgroundColor: theme.palette.info.main,
                  color: "white",
                }}
                variant="contained"
              >
                New Reward
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: "black",
                my: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  Name
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Rewards
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Status
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Actions
                </Typography>
              </Box>

              {Array(1)
                .fill({
                  name: "50 Gift Card",
                  rewards: "5/100 claimed",
                  status: "Active",
                })
                .map((element) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      my: 1,
                    }}
                  >
                    <List>
                      <ListItem sx={{ color: "white" }}>
                        {element.name}
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ color: theme.palette.info.light }}>
                        {element.rewards}
                      </ListItem>
                    </List>
                    <List>
                      <ListItem
                        sx={{
                          color: theme.palette.success.light,
                          fontWeight: 200,
                        }}
                      >
                        {element.status}
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ color: "white" }}>
                        <Button
                          size="small"
                          sx={{
                            fontWeight: 500,
                            backgroundColor: "white",
                            color: "black",
                          }}
                          endIcon={<FontAwesomeIcon icon={faPen} size="sm" />}
                          variant="rounded"
                        >
                          Edit
                        </Button>
                      </ListItem>
                    </List>
                  </Box>
                ))}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
