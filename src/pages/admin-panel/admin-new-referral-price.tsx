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
import { theme } from "theme";
import { AdminBackButton } from "components";

export function AdminNewReferralPrice() {
  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Grid container>
        <Grid item xs={12} md={10}>
          <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
            <Box sx={{ my: 2, alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Milestone Name
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[500] }}
                >
                  *required
                </Typography>
              </Box>
              <TextField
                fullWidth
                sx={{ my: 1, borderRadius: "30px", mr: 1 }}
              />
            </Box>
            <FormControl sx={{ width: 400 }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" fontWeight={500}>
                  Referal Amount
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={400}
                  sx={{ ml: 1, color: theme.palette.grey[500] }}
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
                sx={{ my: 1, width: "100%" }}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{
                my: 3,
                mx: "auto",
                display: "flex",
                alignItems: "center",
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
                Add Milestone
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
