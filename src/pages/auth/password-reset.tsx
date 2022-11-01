import React from "react";
import { InputBox, Label } from "components";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export function PasswordReset() {
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ p: 4 }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="alternet"> Password Reset </Typography>
        <Box sx={{ display: "flex", whiteSpace: "pre" }}>
          <Typography fontWeight={500} variant="body1">
            Forget your Password? Enter your email below to reset it.
          </Typography>
        </Box>

        <FormGroup sx={{ textAlign: "left" }}>
          <InputBox>
            <Label> Email </Label>
            <TextField fullWidth />
          </InputBox>
          <Button
            variant="contained"
            sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
          >
            Reset my password
          </Button>
          <Typography fontWeight={500} variant="body1">
            Please contact us if you have any trouble resetting your password.
          </Typography>
        </FormGroup>
      </Box>
    </Container>
  );
}
