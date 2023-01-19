import React, { ReactElement } from "react";
import { Form, Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { InputBox, Label } from "components";

import SignInController from "./sign-in-controller";
import { AuthRoutePathEnum } from "enum";

/**
 * Sign In form
 * @returns {ReactElement}
 */
export function SignIn(): ReactElement {
  const { getters, handlers } = SignInController();
  const { theme, value, errors } = getters;
  const { changeHandler, submitHandler } = handlers;



  return (
    <Container maxWidth="xs" sx={{ p: 0, my: 3 }} className="loginPage">
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography variant="alternet"> Log in </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", whiteSpace: "pre" }}
          className='mx-5 '
        >
          <Typography fontWeight={500} variant="body1">
            New to PoshSub?
          </Typography>
          <Link
            to={AuthRoutePathEnum.SIGN_UP}
            style={{
              textDecoration: "none",
              marginLeft: 4,
              color: theme.palette.info.main,
            }}
          >
            <Typography fontWeight={500} variant="body1">
              Click here to sign up
            </Typography>
          </Link>
        </Box>
        <Form onSubmit={submitHandler} className='mx-5 '>
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
                type="password"
              />
            </InputBox>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
            >
              Log in
            </Button>
            <Link
              to={AuthRoutePathEnum.FORGET_PASSWORD}
              style={{
                textAlign: "center",
                marginTop: 2,
                textDecoration: "none",
                color: theme.palette.info.main,
              }}
            >
              <Typography fontWeight={500} variant="body1" className="py-5">
                Forgot Password?
              </Typography>
            </Link>
          </FormGroup>
        </Form>
      </Box>
    </Container>
  );
}
