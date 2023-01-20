import React from "react";
import { Form } from "react-router-dom";
import { InputBox, Label } from "components";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import profileController from "./profileController";

export function Profile() {
  const { getters, handlers } = profileController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;

  return (
    <Container sx={{ p: 5 }} maxWidth={false}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" fontWeight={600}>
          Profile
        </Typography>
        <Box sx={{ ml: 2 }}>
          <VerifiedUserIcon color="success" sx={{ mr: 0.5 }} />
        </Box>
        <Typography fontWeight={400} variant="caption">
          Verified
        </Typography>
      </Box>
      <Container maxWidth="xs" sx={{ my: 4 }}>
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
                Please contact us if you have any trouble resetting your
                password.
              </Typography>
            </FormGroup>
          </Form>
        </Box>
      </Container>
    </Container>
  );
}
