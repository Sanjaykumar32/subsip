import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

export function AdminNewCategory() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Box>
            <List>
              {Array(7)
                .fill({
                  name: "Dashboard",
                })
                .map((element, index: number) => (
                  <ListItem key={`${element.name}-${index}`}>
                    <FontAwesomeIcon icon={faUser} />
                    <Typography variant="body1" fontWeight="600" sx={{ ml: 1 }}>
                      {element.name}
                    </Typography>
                  </ListItem>
                ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="lg"
              color={theme.palette.info.main}
            />

            <Button
              size="large"
              sx={{
                fontWeight: 800,
                color: "black",
              }}
            >
              Back
            </Button>

            <Box sx={{ my: 2 }}>
              <FormControl sx={{ width: 300 }}>
                <Typography variant="body2" fontWeight={600}>
                  Select Business Category
                </Typography>
                <Select
                  fullWidth
                  variant="outlined"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  size="medium"
                  sx={{ my: 1 }}
                >
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ my: 2 }}>
                <Typography variant="body2" fontWeight={600}>
                  Subcategory name
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    fullWidth
                    sx={{ my: 1, borderRadius: "30px", mr: 1 }}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="lg"
                    color={theme.palette.info.main}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                my: 2,
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                sx={{
                  fontWeight: 800,
                  backgroundColor: theme.palette.info.main,
                  color: "white",
                }}
                variant="rounded"
              >
                Add Subcategory
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
