import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useAuth } from "context/auth.context";
import { RoutePathEnum } from "enum";
import { useLocation, useNavigate } from "react-router-dom";

interface IOtpBox {
  open: boolean;
  handleClose: () => void;
}

export default function OtpBox(props: IOtpBox) {
  const { open, handleClose } = props;
  const [otp, setOtp] = useState<string>("");
  const auth = useAuth();

  const verifyOtp = async () => {
    await auth.checkOtp({
      otp: otp,
    });
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setOtp(event.target.value);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const submit = () => {
    if (location.state.referralcode && location.state.businessId) {
      navigate(`/listing/?${location.state.businessId}`);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter the one-time passcode that was sent to your email</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="text"
            fullWidth
            variant="standard"
            onChange={changeHandler}
          />
        <span className="text-[12px] pt-3 ">{`If you don't find mail in "Inbox" please check "Spam or Junk" folder`}</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              verifyOtp();
              handleClose();
              submit();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
