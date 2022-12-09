import { AxiosResponse } from "axios";

import { ApiHelper } from "helpers";
import {
  IForgetPasswordRequest,
  IResetPasswordRequest,
  ICredentials,
  ISignInResponse,
  ISignUpRequest,
} from "interface";

/**
 * Authentication Service
 */
export class AuthService {
  /**
   * Admin Sign In
   * @param {ICredentials} credentials
   * @return {Promise<SignInResponse>}
   */
  public static async signIn(
    credentials: ICredentials
  ): Promise<ISignInResponse> {
    const res: AxiosResponse<ISignInResponse> =
      await ApiHelper.send<ISignInResponse>({
        url: "/auth/Login",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }

  /**
   * Sign Up
   * @param {ISignUpRequest} credentials
   * @return {Promise<SignInResponse>}
   */
  public static async signUp(
    credentials: ISignUpRequest
  ): Promise<ISignInResponse> {
    const res: AxiosResponse<ISignInResponse> =
      await ApiHelper.send<ISignInResponse>({
        url: "/auth/signup",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }

  /**
   * Forget Password
   * @param {IForgetPasswordRequest} credentials
   * @return {Promise<SignInResponse>}
   */
  public static async forgetpassword(
    credentials: IForgetPasswordRequest
  ): Promise<ISignInResponse> {
    const res: AxiosResponse<ISignInResponse> =
      await ApiHelper.send<ISignInResponse>({
        url: "/auth/forgot-password",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }

  /**
   * Reset Password
   * @param {IResetPasswordRequest} credentials
   * @return {Promise<SignInResponse>}
   */
  public static async resetpassword(
    credentials: IResetPasswordRequest
  ): Promise<ISignInResponse> {
    const res: AxiosResponse<ISignInResponse> =
      await ApiHelper.send<ISignInResponse>({
        url: "auth/reset-password",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }
}
