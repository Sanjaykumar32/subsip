import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminRewardsToWinner() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
                size="medium"
                sx={{
                  fontWeight: 800,
                  backgroundColor: theme.palette.info.main,
                  color: "white",
                }}
                variant="contained"
              >
                Notify
              </Button>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "baseline", ml: 90, my: 2 }}
            >
              <Typography variant="body2" fontWeight={600} sx={{ ml: 2 }}>
                Sort By:
              </Typography>
              <FormControl variant="standard">
                <Select
                  variant="standard"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  value="Newest"
                  size="small"
                  sx={{ ml: 1 }}
                >
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                backgroundColor: "black",
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
                  Contacted
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Actions
                </Typography>
              </Box>

              {Array(4)
                .fill({
                  name: "Notification 1",
                  Verified: "Verified",
                  Location: 1,
                })
                .map((element) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      my: 1,
                    }}
                  >
                    <List>
                      <ListItem sx={{ color: "white" }}>
                        <Checkbox {...label} defaultChecked />
                        {element.name}
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ color: "white" }}>
                        <FontAwesomeIcon
                          icon={faCertificate}
                          size="xl"
                          style={{
                            marginRight: "3px",
                            color: theme.palette.success.main,
                          }}
                        />
                      </ListItem>
                    </List>

                    <List>
                      <ListItem sx={{ color: "white" }}>
                        <Button
                          size="small"
                          sx={{
                            fontWeight: 500,
                            backgroundColor: theme.palette.grey[200],
                            color: theme.palette.error.main,
                          }}
                          variant="rounded"
                        >
                          Delete
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
