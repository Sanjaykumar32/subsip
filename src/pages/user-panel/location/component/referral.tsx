import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, InputAdornment, TextField, useMediaQuery } from "@mui/material";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { AuthRoutePathEnum } from "enum";
import { toast } from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "data";
import { GET_REFERRAL_COUNT } from "data/selectors/admin.selectors";
import { useCallback, useEffect } from "react";
import { AdminThunk } from "data/thunk/admin.thunk";
import { theme } from "theme";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function ResponsiveDialog({
  title,
  open,
  handleClose,
  refferralCode,
}: any) {
  const location = useParams();
  const businessId = location.id;
  const hostName = window.location.origin;

  console.log(location , hostName , 'location');

  /**
   * copy referral code
   * @return {void}
   */
  const appIdCopy = async (): Promise<void> => {
    // new window.ClipboardEvent(`${hostName}/listing/${businessId}?referralCode=${refferralCode?.referralCode}`);
    handleClose();
    toast.success("Copied Successfully");
    // try {
    //   await navigator.clipboard.writeText(`${hostName}/listing/${businessId}?referralCode=${refferralCode?.referralCode}`);
    //   handleClose();
    //   toast.success("Copied Successfully");
    // } catch (e) {
    //   console.log(e);
    // }


  };

  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const refferalCount = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.refferralCount({ userId: userId ? parseInt(userId) : 0 })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    refferalCount();
  }, [refferalCount]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title refferals">
        <div className="flex  flex-col">
          <span className={`${isMobile ? 'text-[22px] ' : ''} 'text-[1.75rem] text-[#1b1b1b] font-bold'`}>
            Share {title} with others
          </span>
          <span className="text-[14px] text-[#1b1b1b] font-semibold">
            You currently have 0 referrals, only 1 step away from receiving next
            milestone.
          </span>
        </div>

        <IconButton
          className="px-2 py-4"
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
            aria-readonly
            className='reffralText'
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                  <CopyToClipboard text={`${hostName}/listing/${businessId}?referralCode=${refferralCode?.referralCode}`}
                    onCopy={appIdCopy}>
                    <FontAwesomeIcon icon={faCopy} className='text-[#ACCF02]' />
                  </CopyToClipboard>
                </InputAdornment>
              ),
            }}
            placeholder={
              refferralCode.referralCode
                ? `${hostName}/listing/${businessId}?referralCode=${refferralCode.referralCode}`
                : "Referral Code"
            }
          />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
