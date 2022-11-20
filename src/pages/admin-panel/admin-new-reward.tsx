import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminNewReward() {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container>
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
          <Box sx={{ display: "flex" }}>
            <Box sx={{ my: 1, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Name
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 2, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField sx={{ my: 1, borderRadius: "30px" }} />
            </Box>

            <Box sx={{ my: 1, alignItems: "center", ml: 3 }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Availability
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 2, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField sx={{ my: 1, borderRadius: "30px" }} />
            </Box>
          </Box>

          <Box sx={{ my: 1, alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
              <FormControl sx={{ width: 300 }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Category
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={400}
                    sx={{ ml: 2, color: theme.palette.grey[400] }}
                  >
                    *required
                  </Typography>
                </Box>
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

              <FormControl sx={{ width: 300, ml: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Subcategory
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={400}
                    sx={{ ml: 2, color: theme.palette.grey[400] }}
                  >
                    *required
                  </Typography>
                </Box>
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
            </Box>
            <FormControl sx={{ width: 300 }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Business name
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 2, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
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
              Add reward
            </Button>
          </Box>
        </Container>
      </Grid>
    </Container>
  );
}
