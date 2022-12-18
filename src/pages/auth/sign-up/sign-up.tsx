import React from "react";
import { Form, Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { InputBox, Label } from "components";

import SignUpController from "./sign-up-controller";
import { AuthRoutePathEnum } from "enum";

export function SignUp() {
  const { getters, handlers } = SignUpController();
  const { theme, value, errors } = getters;
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
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <InputBox>
              <Label> Password </Label>
              <TextField
                fullWidth
                name="password"
                value={value.password}
                onChange={changeHandler}
              />
            </InputBox>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
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
            <Link
              to={AuthRoutePathEnum.SIGN_IN}
              style={{
                textDecoration: "none",
                color: theme.palette.info.main,
              }}
            >
              <Typography fontWeight={500} variant="body1">
                Already have an account ?
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
