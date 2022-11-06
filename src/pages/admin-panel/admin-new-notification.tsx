import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import {
  faAngleLeft,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminNewNotifictaion() {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <AdminSidebar />
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
            <Box sx={{ my: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Headline
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 2, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField
                fullWidth
                sx={{ my: 1, borderRadius: "30px", mr: 1 }}
              />
            </Box>
            <Box sx={{ my: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Description
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 2, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextareaAutosize
                aria-label="minimum height"
                style={{ width: 400, height: 50, marginTop: 4 }}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ my: 1, alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Date
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={400}
                    sx={{ ml: 2, color: theme.palette.grey[400] }}
                  >
                    *required
                  </Typography>
                </Box>
                <TextField
                  sx={{ my: 1, borderRadius: "30px" }}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <FontAwesomeIcon icon={faCalendarDays} size="xs" />
                      </IconButton>
                    ),
                  }}
                />
              </Box>

              <Box sx={{ my: 1, alignItems: "center", ml: 3 }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" fontWeight={500}>
                    Business location
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={400}
                    sx={{ ml: 2, color: theme.palette.grey[400] }}
                  >
                    *required
                  </Typography>
                </Box>
                <TextField
                  sx={{ my: 1, borderRadius: "30px" }}
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <FontAwesomeIcon icon={faLocationDot} size="xs" />
                      </IconButton>
                    ),
                  }}
                />
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
                <Typography variant="body2" fontWeight={500}>
                  Business name
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
                Send notification
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
