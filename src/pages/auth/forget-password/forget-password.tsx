import React, { ReactElement } from "react";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

import { InputBox, Label } from "components";

import ForgetPasswordController from "./forget-password-controller";
import { Form } from "react-router-dom";

/**
 *
 * @returns {ReactElement}
 */
export function ForgetPassword(): ReactElement {
  const { getters, handlers } = ForgetPasswordController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;

  return (
    <Container maxWidth="xs" sx={{ p: 4, my: 3.5 }}>
      <Box sx={{ my: 1 }}>
        <Typography variant="alternet">Forget Password </Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          <Typography fontWeight={500} variant="body2">
            Forget your Password? Enter your email below to reset it.
          </Typography>
        </Box>
        <Form onSubmit={submitHandler}>
          <FormGroup sx={{ textAlign: "left" }}>
            <InputBox>
              <Label> Email * </Label>
              <TextField
                required
                fullWidth
                name="email"
                value={value.email}
                onChange={changeHandler}
              />
            </InputBox>
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
            >
              Submit
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
