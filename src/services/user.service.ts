/**
 * User Service
 */
export class UserService {
  /**
   * Fetch Profile
   * @return {Promise<SignInResponse>}
   */
  public static async fetchProfile() {
    // const res: AxiosResponse<ISignInResponse> =
    //   await ApiHelper.send<ISignInResponse>({
    //     url: "auth/reset-password",
    //     method: "POST",
    //     data: credentials,
    //   });

    return {
      name: "deepali",
      lastName: "sirsath",
      profilePic:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      type: 1,
    };
  }
}
