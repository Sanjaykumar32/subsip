import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import {
  faAngleLeft,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminSidebar } from "components";
import { theme } from "theme";

export function AdminNotifyButton() {
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

            <Box sx={{ my: 2, alignItems: "center" }}>
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
                Add Milestone
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
