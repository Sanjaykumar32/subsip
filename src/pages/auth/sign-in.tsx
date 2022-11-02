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

export function SignIn() {
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ p: 4 }}>
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography variant="alternet"> Log in </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", whiteSpace: "pre" }}
        >
          <Typography fontWeight={500} variant="body1">
            New to PoshSub?
          </Typography>
          <Link href="/signup" variant="body1">
            {" "}
            Click here to sign up!
          </Link>
        </Box>

        <FormGroup sx={{ textAlign: "left" }}>
          <InputBox>
            <Label> Email </Label>
            <TextField fullWidth />
          </InputBox>
          <InputBox>
            <Label> Password </Label>
            <TextField fullWidth />
          </InputBox>
          <Button
            variant="contained"
            href="/location/1"
            sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
          >
            Log in
          </Button>
          <Link href="/forgotPassword" sx={{ textAlign: "center", mt: 2 }}>
            Forgot Password?
          </Link>
        </FormGroup>
      </Box>
    </Container>
  );
}
