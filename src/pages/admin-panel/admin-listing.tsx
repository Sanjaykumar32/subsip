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

export function AdminListing() {
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
                New Listing
              </Button>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "baseline", ml: 80, my: 2 }}
            >
              <Typography variant="body2" fontWeight={600} sx={{ ml: 2 }}>
                Sort By:
              </Typography>
              <FormControl variant="standard">
                <Select
                  variant="standard"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  value="Recommended "
                  size="small"
                  sx={{ ml: 1 }}
                >
                  <MenuItem value={"Recommended "}>Recommended </MenuItem>
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
                  Subscribers
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Location
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Actions
                </Typography>
              </Box>

              {Array(4)
                .fill({
                  name: "Notification 1",
                  Subscribers: "17 subcategories",
                  location: "Seattle, WA ",
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
                        <Avatar sx={{ height: "30px", width: "30px", mr: 1 }} />
                        {element.name}
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ color: theme.palette.info.main }}>
                        {element.Subscribers}
                      </ListItem>
                    </List>
                    <List>
                      <ListItem sx={{ color: "white", fontWeight: 200 }}>
                        {element.location}
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
