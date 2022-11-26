import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextareaAutosize,
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
      <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
        <Box sx={{ my: 2, alignItems: "center" }}>
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
          <TextField
            fullWidth
            sx={{ my: 1, borderRadius: "30px", mr: 1, width: 600 }}
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
              sx={{ ml: 1, color: theme.palette.grey[400] }}
            >
              *required
            </Typography>
          </Box>
          <TextareaAutosize
            aria-label="minimum height"
            style={{ width: 600, height: 50, marginTop: 4 }}
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
                sx={{ ml: 1, color: theme.palette.grey[400] }}
              >
                *required
              </Typography>
            </Box>
            <TextField
              sx={{ my: 1, borderRadius: "30px", width: 300 }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <FontAwesomeIcon icon={faCalendarDays} size="xs" />
                  </IconButton>
                ),
              }}
            />
          </Box>

          <Box sx={{ my: 1, alignItems: "center", ml: 1 }}>
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
              sx={{ my: 1, borderRadius: "30px", width: 290 }}
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
              <Typography variant="body2" fontWeight={500}>
                Category
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                size="small"
                sx={{ my: 1, width: 300 }}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ ml: 1 }}>
              <Typography variant="body2" fontWeight={500}>
                Subcategory
              </Typography>
              <Select
                fullWidth
                variant="outlined"
                labelId="sort-by-select-label"
                id="sort-by-simple-select"
                size="small"
                sx={{ my: 1, width: 290, ml: 18 }}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl sx={{ width: 600, my: 1 }}>
            <Typography variant="body2" fontWeight={500}>
              Business Name
            </Typography>
            <Select
              fullWidth
              variant="outlined"
              labelId="sort-by-select-label"
              id="sort-by-simple-select"
              size="small"
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
            Send Notification
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
