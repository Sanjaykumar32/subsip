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
import { AdminBackButton } from "components";
import { theme } from "theme";

export function AdminNewReward() {
  return (
    <Container maxWidth="lg">
      <AdminBackButton />

      <Container maxWidth="sm" sx={{ mt: 1, ml: 0.5 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Typography variant="body2" fontWeight={500}>
                Name
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
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Typography variant="body2" fontWeight={500}>
                Availability
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
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Typography variant="body2" fontWeight={500}>
                  Category
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
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
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Subcategory
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[400] }}
                >
                  *required
                </Typography>
              </Box>
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
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" fontWeight={500}>
              Business name
            </Typography>
            <Typography
              variant="caption"
              fontWeight={400}
              sx={{ ml: 1, color: theme.palette.grey[400] }}
            >
              *required
            </Typography>
          </Box>
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
            mt: 2,
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
              color: theme.palette.common.white,
            }}
            variant="rounded"
          >
            Add reward
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
