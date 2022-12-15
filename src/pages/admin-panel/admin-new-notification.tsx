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
  TextField,
  Typography,
} from "@mui/material";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminBackButton } from "components";
import { theme } from "theme";

export function AdminNewNotifictaion() {
  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Container maxWidth="sm" sx={{ my: 1, ml: 0.5 }}>
        <Box sx={{ mt: 2, alignItems: "center" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" fontWeight={500}>
              Headline
            </Typography>
            <Typography
              variant="caption"
              fontWeight={400}
              sx={{ ml: 1, color: theme.palette.grey[400] }}
            >
              *required
            </Typography>
          </Box>
          <TextField fullWidth />
        </Box>
        <Box sx={{ mt: 2, alignItems: "center" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" fontWeight={500}>
              Description
            </Typography>
            <Typography
              variant="caption"
              fontWeight={400}
              sx={{ ml: 1, color: theme.palette.grey[400] }}
            >
              *required
            </Typography>
          </Box>
          <TextField multiline fullWidth minRows={2} maxRows={5} />
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Date
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FontAwesomeIcon icon={faCalendarDays} size="xs" />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Business Location
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FontAwesomeIcon icon={faLocationDot} size="xs" />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight={500}>
                Category
              </Typography>
              <Select
                variant="outlined"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                size="small"
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight={500}>
                Subcategory
              </Typography>
              <Select
                variant="outlined"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                size="small"
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl sx={{ mt: 2 }} fullWidth>
          <Typography variant="body2" fontWeight={500}>
            Business Name
          </Typography>
          <Select
            variant="outlined"
            labelId="sort-by-select-label"
            id="sort-by-simple-select"
            size="small"
          >
            <MenuItem value={"Newest"}>Newest</MenuItem>
            <MenuItem value={"Oldest"}>Oldest</MenuItem>
          </Select>
        </FormControl>

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
            Send Notification
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
