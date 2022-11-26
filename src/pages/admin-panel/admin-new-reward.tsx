import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
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

      <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ my: 1, alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
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
            <TextField
              fullWidth
              sx={{ my: 1, borderRadius: "30px", mr: 1, width: "400px" }}
            />
          </Box>

          <Box sx={{ my: 1, alignItems: "center", ml: 2 }}>
            <Box sx={{ display: "flex" }}>
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
            <TextField
              fullWidth
              sx={{ my: 1, borderRadius: "30px", mr: 1, width: "400px" }}
            />
          </Box>
        </Box>

        <Box sx={{ my: 1.5, alignItems: "center" }}>
          <Box sx={{ display: "flex" }}>
            <FormControl>
              <Box sx={{ display: "flex" }}>
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
                fullWidth
                variant="outlined"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                size="small"
                sx={{ my: 1, width: "400px" }}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ ml: 53 }}>
              <FormControl>
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
                  fullWidth
                  variant="outlined"
                  labelId="sort-by-select-label"
                  id="sort-by-simple-select"
                  size="small"
                  sx={{ my: 1, width: "400px" }}
                >
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <FormControl sx={{ my: 1.5 }}>
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
              fullWidth
              variant="outlined"
              labelId="sort-by-select-label"
              id="sort-by-simple-select"
              size="small"
              sx={{ my: 1, width: "400px" }}
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
