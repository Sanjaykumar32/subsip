import { AxiosResponse } from "axios";

import { ApiHelper } from "helpers";
import { ISignInRequest, ISignInResponse } from "interface";

/**
 * Authentication Service
 */
export class AuthService {
  /**
   * Admin Sign In
   * @param {ISignInRequest} credentials
   * @return {Promise<SignInResponse>}
   */
  public static async adminSignIn(
    credentials: ISignInRequest
  ): Promise<ISignInResponse> {
    const res: AxiosResponse<ISignInResponse> =
      await ApiHelper.send<ISignInResponse>({
        url: "/api/v2/user/login",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }
}
