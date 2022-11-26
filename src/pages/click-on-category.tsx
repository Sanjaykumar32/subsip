import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ClickOnCategory() {
  const theme = useTheme();

  const data = {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2881&q=80",
    title: "India Gate Restaurant",
    location: "Seattle,WA",
    desc: "Welcome to the India Gate Restaurant where we offer unique food.",
    subscribers: "46.2K subscribers",
    footer:
      "Claim FREE gift cards as they become available from the business listed above ",
  };

  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={2.5}>
          <Box sx={{ height: "170%", overflow: "auto" }}>
            <Typography variant="body1" gap={1.5} fontWeight="600">
              Listings by subcategory:
            </Typography>

            <List>
              {Array(12)
                .fill({
                  name: "India Gate Restaurant",
                })
                .map((element, index: number) => (
                  <ListItem key={`${element.name}-${index}`}>
                    {element.name}
                  </ListItem>
                ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={8.5}>
          <Box>
            <Typography variant="alternet">
              Browse restaurants in Seattle, WA
            </Typography>
            <Box>
              <Typography variant="body2" gap={1.5} fontWeight="600">
                61 listings
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="caption">Sort By:</Typography>
              <FormControl variant="standard">
                <Select
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  value="Newest"
                  size="small"
                  sx={{ fontWeight: 500 }}
                >
                  <MenuItem value={"Newest"}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Newest
                    </Typography>
                  </MenuItem>
                  <MenuItem value={"Oldest"}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Oldest
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={2} gap={1.5}>
              {Array(12)
                .fill(data)
                .map((data) => (
                  <Grid key={data.title} item sm={2.3}>
                    <Card
                      sx={{
                        maxWidth: "251px",
                        maxHeight: "400px",
                      }}
                      elevation={6}
                    >
                      <img
                        src={data.image}
                        alt={data.title}
                        width="100%"
                        height="165px"
                        style={{ objectFit: "cover" }}
                      />
                      <Box sx={{ p: 1.5 }}>
                        <Typography variant="body1" fontWeight={600}>
                          {data.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          fontWeight={600}
                          color={theme.palette.grey[500]}
                        >
                          {data.location}
                        </Typography>

                        <Box sx={{ my: 1, lineHeight: 0 }}>
                          <Typography fontSize={11} fontWeight={600}>
                            {data.desc}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                          }}
                        >
                          <Typography
                            variant="caption"
                            fontWeight={600}
                            color={theme.palette.grey[500]}
                          >
                            {data.subscribers}
                          </Typography>
                          <Button color="error" variant="rounded" size="small">
                            Subscribe
                          </Button>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center",
                          backgroundColor: theme.palette.grey[300],
                          p: 1,
                        }}
                      >
                        <Typography fontSize={11} fontWeight={600}>
                          {data.footer}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
