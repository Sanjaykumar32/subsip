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
    <Container maxWidth="xs" sx={{ p: 4, my: 3.5 }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="alternet"> Password Reset </Typography>

        <FormGroup sx={{ textAlign: "left" }}>
          <InputBox>
            <Label> Password * </Label>
            <TextField fullWidth type="password" />
          </InputBox>

          <InputBox>
            <Label>Confirm Password * </Label>
            <TextField fullWidth type="password" />
          </InputBox>
          <Button
            variant="contained"
            sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
          >
            Reset my password
          </Button>
          <Typography fontWeight={500} variant="body2" sx={{ my: 2 }}>
            Please contact us if you have any trouble resetting your password.
          </Typography>
        </FormGroup>
      </Box>
    </Container>
  );
}