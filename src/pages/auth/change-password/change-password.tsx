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

import passwordChangeController from "./change-password-controller";

/**
 *
 * @returns {ReactElement}
 */
export function PasswordChange(): ReactElement {
  const { getters, handlers } = passwordChangeController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;

  return (
    <Container maxWidth="xs" sx={{  my: 3.5 }} className='changePadding'>
      <Box sx={{ my: 1 }}>
        <Typography variant="alternet">Change Password </Typography>

        <Form onSubmit={submitHandler}>
          <FormGroup sx={{ textAlign: "left" }}>
            <InputBox>
              <Label>Old Password</Label>
              <TextField
                fullWidth
                type="password"
                name="oldPassword"
                value={value.oldPassword}
                onChange={changeHandler}
              />
            </InputBox>

            <InputBox>
              <Label>New Password</Label>
              <TextField
                fullWidth
                type="password"
                name="newPassword"
                value={value.newPassword}
                onChange={changeHandler}
              />
            </InputBox>
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 4, fontSize: theme.typography.pxToRem(20) }}
            >
              Change my password
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
