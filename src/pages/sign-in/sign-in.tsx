import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";

export function SignIn() {
  return (
    <Box sx={{ my: 1 }}>
      <Typography> Log in </Typography>
      <Typography> New to PoshSub? </Typography>
      <Typography> Click here to sign up! </Typography>

      <FormGroup>
        <Typography> Email </Typography>
        <TextField />
        <Typography> Password </Typography>
        <TextField />
        <Button variant="contained" sx={{ mt: 2 }}>
          Log in
        </Button>
        <Link to="/forgotPassword">
          <Typography> Forgot Password? </Typography>
        </Link>
      </FormGroup>
    </Box>
  );
}
