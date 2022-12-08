import React, { ReactElement } from "react";
import { Form } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
  Link,
} from "@mui/material";

import { InputBox, Label } from "components";

import SignInController from "./sign-in-controller";

/**
 * Sign In form
 * @returns {ReactElement}
 */
export function SignIn(): ReactElement {
  const { getters, handlers } = SignInController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;

  return (
    <Container maxWidth="xs" sx={{ p: 4, my: 3 }}>
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography variant="alternet"> Log in </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", whiteSpace: "pre" }}
        >
          <Typography fontWeight={500} variant="body1">
            New to PoshSub?
          </Typography>
          <Link href="/signup" variant="body1" sx={{ ml: 1 }}>
            Click here to sign up
          </Link>
        </Box>
        <Form onSubmit={submitHandler}>
          <FormGroup sx={{ textAlign: "left", my: 2 }}>
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
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
            >
              Log in
            </Button>
            <Link href="/PasswordReset" sx={{ textAlign: "center", mt: 2 }}>
              Forgot Password?
            </Link>
          </FormGroup>
        </Form>
      </Box>
    </Container>
  );
}
