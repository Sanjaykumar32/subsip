import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IForgetPasswordRequest,
  IResetPasswordRequest,
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
} from "interface";
import { AuthService } from "services/authentication";

/**
 * Authentication Thunk Middleware
 */
export class AuthenticationThunk {
  /**
   * SignIn Thunk
   */
  public static SignIn = createAsyncThunk(
    "authentication/signin/user",
    async (credentials: ISignInRequest): Promise<ISignInResponse> => {
      const response = await AuthService.signIn(credentials);
      return response;
    }
  );

  /**
   * SignUp Thunk
   */
  public static SignUp = createAsyncThunk(
    "authentication/SignUp/user",
    async (credentials: ISignUpRequest): Promise<ISignInResponse> => {
      const response = await AuthService.signUp(credentials);
      return response;
    }
  );

  /**
   * ForgetPassword Thunk
   */
  public static ForgetPassword = createAsyncThunk(
    "authentication/ForgetPassword/user",
    async (credentials: IForgetPasswordRequest): Promise<ISignInResponse> => {
      const response = await AuthService.forgetpassword(credentials);
      return response;
    }
  );

  /**
   * ResetPassword Thunk
   */
  public static ResetPassword = createAsyncThunk(
    "authentication/ResetPassword/user",
    async (credentials: IResetPasswordRequest): Promise<ISignInResponse> => {
      const response = await AuthService.resetpassword(credentials);
      return response;
    }
  );
}
