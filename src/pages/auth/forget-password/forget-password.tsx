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

export function ForgetPassword() {
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ p: 4, my: 3.5 }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="alternet">Forget Password </Typography>
        <Box sx={{ display: "flex", whiteSpace: "pre", mt: 1 }}>
          <Typography fontWeight={500} variant="body2">
            Forget your Password? Enter your email below to reset it.
          </Typography>
        </Box>

        <FormGroup sx={{ textAlign: "left" }}>
          <InputBox>
            <Label> Email * </Label>
            <TextField fullWidth />
          </InputBox>
          <Button
            variant="contained"
            sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
          >
            Submit
          </Button>
          <Typography fontWeight={500} variant="body2" sx={{ my: 2 }}>
            Please contact us if you have any trouble resetting your password.
          </Typography>
        </FormGroup>
      </Box>
    </Container>
  );
}
