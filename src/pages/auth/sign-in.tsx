import React from "react";
import { Label } from "components";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
  Link,
} from "@mui/material";

export function SignIn() {
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
          <Box sx={{ mt: 1.5 }}>
            <Label> Email </Label>
            <TextField fullWidth />
          </Box>
          <Box sx={{ mt: 1.5 }}>
            <Label> Password </Label>
            <TextField fullWidth />
          </Box>
          <Button variant="contained" sx={{ mt: 4 }}>
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
