import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";

export function SignUp() {
  return (
    <Box sx={{ my: 1 }}>
      <Typography> Sign up </Typography>
      <FormGroup>
        <Typography> Email </Typography>
        <TextField />
        <Typography> Password </Typography>
        <TextField />
        <Button variant="contained" sx={{ mt: 2 }}>
          Create your account
        </Button>
        <Typography>
          By clicking "Create your account", you are creating a PoshSub account
          and agree to PoshSub's Terms of Service and Privacy Policy.
        </Typography>
        <Link to="/already-account">
          <Typography> Already have an account ? </Typography>
        </Link>
      </FormGroup>
    </Box>
  );
}
