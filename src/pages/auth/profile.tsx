import React from "react";
import { InputBox, Label } from "components";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
  Link,
  useTheme,
} from "@mui/material";

export function Profile() {
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ p: 4 }}>
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography variant="alternet"> Profile </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", whiteSpace: "pre" }}
        >
          <Typography fontWeight={500} variant="body1">
            verified
          </Typography>
        </Box>

        <FormGroup sx={{ textAlign: "left" }}>
          <InputBox>
            <Label> Email </Label>
            <Typography fontWeight={500} variant="body1">
              (rewards will be sent here)
            </Typography>
            <TextField fullWidth />
          </InputBox>
          <InputBox>
            <Label> My Location </Label>
            <Typography fontWeight={500} variant="body1">
              (city)
            </Typography>
            <TextField fullWidth />
          </InputBox>
          <Button
            variant="contained"
            sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
          >
            Update email
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
          >
            Reset Password
          </Button>
        </FormGroup>
      </Box>
    </Container>
  );
}
