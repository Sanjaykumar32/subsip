import React from "react";
import {
  Box,
  Link,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { InputBox, Label } from "components";

export function SignUp() {
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ p: 4 }}>
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography variant="alternet"> Sign up </Typography>
        <FormGroup sx={{ textAlign: "left" }}>
          <InputBox>
            <Label> Email </Label>
            <TextField fullWidth />
          </InputBox>
          <InputBox>
            <Label> Password </Label>
            <TextField fullWidth />
          </InputBox>
          <Button variant="contained" sx={{ mt: 4 }}>
            <Typography
              variant="alternet"
              fontSize={theme.typography.pxToRem(20)}
            >
              Create your account
            </Typography>
          </Button>
        </FormGroup>
        <Box sx={{ mt: 3 }}>
          <Typography variant="caption" fontWeight={600}>
            By clicking "Create your account", you are creating a PoshSub
            account and agree to PoshSub's Terms of Service and Privacy Policy.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="/signin">Already have an account ?</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
