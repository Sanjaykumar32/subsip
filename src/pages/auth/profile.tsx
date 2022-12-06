import React from "react";
import { InputBox, Label } from "components";
import {
  Box,
  Button,
  Container,
  FormGroup,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  const theme = useTheme();

  return (
    <Container sx={{ p: 5 }} maxWidth={false}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" fontWeight={600}>
          Profile
        </Typography>
        <Box sx={{ ml: 2 }}>
          <VerifiedUserIcon color="success" sx={{ mr: 0.5 }} />
        </Box>
        <Typography fontWeight={400} variant="caption">
          Verified
        </Typography>
      </Box>

      <Container maxWidth="xs" sx={{ my: 4 }}>
        <Box sx={{ my: 1, textAlign: "center" }}>
          <FormGroup sx={{ textAlign: "left" }}>
            <InputBox>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Label> Email </Label>
                <Typography fontWeight={400} variant="caption" sx={{ ml: 1 }}>
                  (rewards will be sent here)
                </Typography>
              </Box>
              <TextField fullWidth />
            </InputBox>
            <InputBox>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Label> My Location </Label>
                <Typography fontWeight={400} variant="caption" sx={{ ml: 1 }}>
                  (city)
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
            </InputBox>
            <Button
              variant="contained"
              sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
            >
              Update Email
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 2, fontSize: theme.typography.pxToRem(20) }}
            >
              Reset Password
            </Button>
          </FormGroup>
        </Box>
      </Container>
    </Container>
  );
}
