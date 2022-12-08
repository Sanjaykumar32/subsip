import React from "react";
import { Form } from "react-router-dom";
import {
  Box,
  Link,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { InputBox, Label } from "components";

import SignUpController from "./sign-up-controller";

export function SignUp() {
  const { getters, handlers } = SignUpController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;

  return (
    <Container maxWidth="xs" sx={{ p: 4 }}>
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography variant="alternet"> Sign up </Typography>
        <Form onSubmit={submitHandler}>
          <FormGroup sx={{ textAlign: "left" }}>
            <InputBox>
              <Label> Email </Label>
              <TextField
                fullWidth
                name="email"
                value={value.email}
                onChange={changeHandler}
              />
            </InputBox>
            <InputBox>
              <Label> Password </Label>
              <TextField
                fullWidth
                name="password"
                value={value.password}
                onChange={changeHandler}
              />
            </InputBox>
            <Button variant="contained" sx={{ mt: 4 }} type="submit">
              <Typography
                variant="alternet"
                fontSize={theme.typography.pxToRem(20)}
              >
                Create your account
              </Typography>
            </Button>
          </FormGroup>
        </Form>
        <Box sx={{ mt: 3 }}>
          <Typography variant="caption" fontWeight={600}>
            By clicking &quot;Create your account&quot;, you are creating a
            PoshSub account and agree to PoshSub&apos;s Terms of Service and
            Privacy Policy.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="/signin">Already have an account ?</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
