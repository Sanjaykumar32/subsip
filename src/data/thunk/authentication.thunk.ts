import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IForgetPasswordRequest,
  IResetPasswordRequest,
  ISignInResponse,
} from "interface";
import { AuthService } from "services/authentication.service";

/**
 * Authentication Thunk Middleware
 */
export class AuthenticationThunk {
  /**
   * ForgetPassword Thunk
   */
  public static forgetPassword = createAsyncThunk(
    "auth/forgetPassword",
    async (credentials: IForgetPasswordRequest): Promise<ISignInResponse> => {
      const response = await AuthService.forgetpassword(credentials);
      return response;
    }
  );

  /**
   * ResetPassword Thunk
   */
  public static resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (credentials: IResetPasswordRequest): Promise<ISignInResponse> => {
      const response = await AuthService.resetpassword(credentials);
      return response;
    }
  );
}
