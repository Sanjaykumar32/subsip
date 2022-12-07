// Disabled for the Entire file due to no pram reassing but its required in
// Redux
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthenticationThunk } from "data/thunk";

import { AccountTypeEnum, ReducerEnum } from "enum";
import { ISignInResponse } from "interface";

export interface IAuthticationState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  accountType: AccountTypeEnum;
  signInresponse: ISignInResponse;
}

const initialState: IAuthticationState = {
  isInitialized: false,
  isAuthenticated: false,
  accountType: AccountTypeEnum.NONE,
  signInresponse: {} as ISignInResponse,
};

export const authSlice = createSlice({
  name: ReducerEnum.AUTHENTICATION,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setAuthenticationState: (
      state: IAuthticationState,
      action: PayloadAction<boolean>
    ) => {
      state.isAuthenticated = action.payload;
    },
    authInitalize: (
      state: IAuthticationState,
      action: PayloadAction<boolean>
    ) => {
      state.isInitialized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthenticationThunk.SignIn.fulfilled, (state, action) => {
      state.signInresponse = action.payload;
      state.accountType = AccountTypeEnum.ADMIN;
      state.isAuthenticated = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const authenticationActions = { ...authSlice.actions };

export default authSlice.reducer;
