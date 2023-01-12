import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { AuthRoutePathEnum } from "enum";
import { toast } from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";

export default function ResponsiveDialog({
  open,
  handleClose,
  refferralCode,
}: any) {
  const location = useParams();
  const businessId = location.id;
  const hostName = window.location.origin;

  /**
   * copy referral code
   * @return {void}
   */
  const appIdCopy = (): void => {
    navigator.clipboard.writeText(
      `${hostName}/listing/${businessId}/?referralCode=${refferralCode.referralCode}`
    );
    handleClose();
    toast.success("Copied SuccessFully");
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
