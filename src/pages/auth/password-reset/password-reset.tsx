import React, { ReactElement } from "react";
import { Form } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { InputBox, Label } from "components";

import PasswordResetController from "./password-reset-controller";

/**
 *
 * @returns {ReactElement}
 */
export function PasswordReset(): ReactElement {
  const { getters, handlers } = PasswordResetController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;

  return (
    <Container maxWidth="xs" sx={{ p: 4, my: 3.5 }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="alternet"> Password Reset </Typography>

        <Form onSubmit={submitHandler}>
          <FormGroup sx={{ textAlign: "left" }}>
            <InputBox>
              <Label> Password * </Label>
              <TextField
                fullWidth
                type="password"
                name="password"
                value={value.password}
                onChange={changeHandler}
              />
            </InputBox>

            <InputBox>
              <Label>Confirm Password * </Label>
              <TextField
                fullWidth
                type="password"
                name="confirmPassword"
                value={value.confirmPassword}
                onChange={changeHandler}
              />
            </InputBox>
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
            >
              Reset my password
            </Button>
            <Typography fontWeight={500} variant="body2" sx={{ my: 2 }}>
              Please contact us if you have any trouble resetting your password.
            </Typography>
          </FormGroup>
        </Form>
      </Box>
    </Container>
  );
}
