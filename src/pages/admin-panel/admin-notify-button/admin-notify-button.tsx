import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminBackButton } from "components";
import { theme } from "theme";

export function AdminNotifyButton() {
  return (
    <Container maxWidth="lg">
      <AdminBackButton />
      <Container maxWidth="xs" sx={{ my: 1, ml: 0.5 }}>
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
          <TextField fullWidth sx={{ my: 1, mr: 1 }} />
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
    </Container>
  );
}