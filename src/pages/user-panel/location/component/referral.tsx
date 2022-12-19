import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function ResponsiveDialog({
  open,
  handleClose,
  refferralCode,
}: any) {
  /**
   * copy referral code
   * @return {void}
   */
  const appIdCopy = (): void => {
    navigator.clipboard.writeText(refferralCode.referralCode);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 1,
          }}
          size="small"
        >
          <FontAwesomeIcon icon={faClose} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faCopy} onClick={appIdCopy} />
                </InputAdornment>
              ),
            }}
            placeholder={
              refferralCode.referralCode
                ? refferralCode.referralCode
                : "Referral Code"
            }
          />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
