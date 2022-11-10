import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminNotification() {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <AdminSidebar />
        </Grid>
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: 100,
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
              New Notification
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "baseline", ml: 100, my: 2 }}>
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

          <Container sx={{ ml: 2, width: "100%", height: "100%" }}>
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
                  Actions
                </Typography>
              </Box>

              {Array(4)
                .fill({
                  name: "Notification 1",
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
                        {element.name}
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
