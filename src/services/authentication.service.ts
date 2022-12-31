import { AxiosResponse } from "axios";

import { ApiHelper } from "helpers";
import {
  IForgetPasswordRequest,
  IResetPasswordRequest,
  ICredentials,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
  IOTpRequest,
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
  ): Promise<ISignUpResponse> {
    const res: AxiosResponse<ISignUpResponse> =
      await ApiHelper.send<ISignUpResponse>({
        url: "/auth/signup",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }

  /**
   * OTP Send
   * @param {IOTpRequest} credentials
   * @return {Promise<any>}
   */
  public static async OtpSend(credentials: IOTpRequest): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/auth/send-otp",
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
