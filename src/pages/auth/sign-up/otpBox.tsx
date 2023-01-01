import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AuthenticationThunk } from "data/thunk";
import { useAppDispatch } from "data";

interface IOtpBox {
  open: boolean;
  handleClose: () => void;
}

export default function OtpBox(props: IOtpBox) {
  const { open, handleClose } = props;
  const [otp, setOtp] = useState<string>("");
  const dispatch = useAppDispatch();

  const verifyOtp = async () => {
    await dispatch(
      AuthenticationThunk.checkSendOtp({
        otp: otp,
      })
    );
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setOtp(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter the OTP</DialogTitle>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              verifyOtp();
              handleClose();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
