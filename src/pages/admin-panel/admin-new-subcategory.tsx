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
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { AdminSidebar } from "components";

export function AdminNewSubCategory() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
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
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" fontWeight={500}>
                Select Business Category
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
          <Box sx={{ my: 2, alignItems: "center" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" fontWeight={500}>
                Subcategory Name
              </Typography>
              <Typography
                variant="caption"
                fontWeight={400}
                sx={{ ml: 2, color: theme.palette.grey[400] }}
              >
                *required
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                fullWidth
                sx={{ my: 1, borderRadius: "30px", mr: 1 }}
              />
              <FontAwesomeIcon icon={faPlus} size="lg" color="black" />
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
    </Container>
  );
}
