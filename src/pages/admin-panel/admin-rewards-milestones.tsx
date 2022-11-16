import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminRewardsMileStones() {
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
                New Category
              </Button>
            </Box>

            <Box
              sx={{
                backgroundColor: "black",
                my: 6,
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
                  Actions
                </Typography>
              </Box>

              {Array(4)
                .fill({
                  name: "India Gate Restaurant",
                  subCategory: "1 reward",
                })
                .map((element) => (
                  <Box
                    key={element.name}
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
                      <ListItem sx={{ color: theme.palette.info.main }}>
                        {element.subCategory}
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