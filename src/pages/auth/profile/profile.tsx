import React, { useCallback, useEffect } from "react";
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppDispatch, useAppSelector } from "data";
import { GET_ALL_SUBSCRIBER, GET_ALL_SUBSCRIBER_OF_BUSINESS } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";

export function Profile() {
  const { getters, handlers } = profileController();
  const { theme, value } = getters;
  const { changeHandler, submitHandler } = handlers;
  const subscribeBusiness = useAppSelector(GET_ALL_SUBSCRIBER_OF_BUSINESS);
  const userId = localStorage.getItem("userId");
  const dispatch = useAppDispatch();

  const email =  subscribeBusiness?.map((el:any)=>{
    return el.vEmail
  })

  const allsubscriberOfBussiness = useCallback(async () => {
    try {
      await dispatch(
        AdminThunk.allSubscriberOfBussiness({
          userId: userId ? parseInt(userId) : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    allsubscriberOfBussiness();
  }, [allsubscriberOfBussiness]);

  const userEmail =  localStorage.getItem('email')

  return (
    <Container sx={{ py: 8 , px:5 }} maxWidth={false}>
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
      <Box sx={{ display: "flex", alignItems: "center"  }} className='mt-2'>
        <Typography fontWeight={400} variant='body2'>
         <span className="text-[20px] font-bold">Email: 
         </span> 
          {userEmail && <>
          <span className="px-1">
           <AccountCircleIcon className="!h-5 !w-5 "/></span>
           <span> {userEmail }</span>
           </>
           }
        </Typography>
      </Box>
      <Container maxWidth="xs" sx={{ my: 4 , p:0 }}>
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
