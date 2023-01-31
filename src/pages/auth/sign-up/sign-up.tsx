import React from "react";
import { Form, Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { InputBox, Label } from "components";

import SignUpController from "./sign-up-controller";
import { AuthRoutePathEnum } from "enum";
import OtpBox from "./otpBox";

export function SignUp() {
  const { getters, handlers } = SignUpController();
  const { theme, value, errors, open } = getters;
  const { changeHandler, submitHandler, handleClose } = handlers;
  const location = useLocation();
  console.log(location, "location");
  const navigate = useNavigate();

  // const submit = () => {
  //   if (location.state.referralcode && location.state.businessId) {
  //   }
  // };

  return (
    <Container maxWidth="xs" sx={{ p: 0 }}>
      <Box sx={{ my: 1, textAlign: "center" }} className='mx-5'>
        <Typography variant="alternet"> Sign up </Typography>
        <Form>
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
                type="password"
                name="password"
                value={value.password}
                onChange={changeHandler}
              />
            </InputBox>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}
            <Button variant="contained" sx={{ mt: 4 }} onClick={submitHandler}>
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
          <Typography variant="caption" fontWeight={500}>
            By clicking &quot;Create your account&quot;, you are creating a
            PoshSub account and agree to PoshSub&apos;s
          </Typography>
          <Typography variant="caption" fontWeight={800} >
            <span onClick={()=> navigate('/terms')} className=' cursor-pointer' > Terms  </span>
            <span  onClick={()=> navigate('/privacy')} className=' cursor-pointer'> & Privacy Policy.</span>
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
      <OtpBox open={open} handleClose={handleClose} />
    </Container>
  );
}
