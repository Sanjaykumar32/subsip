import { AxiosResponse } from "axios";
import { ApiHelper } from "helpers";
import {
  IBannerResponse,
  IBussinessResponse,
  IBussinessRequest,
  IAddSubscriberTobussinessRequest,
} from "interface";

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

  /**
   * Banner List
   * @return {Promise<IBannerResponse>}
   */
  public static async bannerList(): Promise<IBannerResponse> {
    const res: AxiosResponse<IBannerResponse> =
      await ApiHelper.send<IBannerResponse>({
        url: `/banner`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * get business by all / Id / name
   * @return {Promise<IBussinessResponse>}
   */
  public static async bussiness(
    payload?: IBussinessRequest
  ): Promise<IBussinessResponse> {
    let URL = "/business";
    if (payload?.businessId) {
      URL += `?businessId=${payload.businessId}`;
    } else if (payload?.businessName) {
      URL += `?businessName=${payload.businessName}`;
    }
    const res: AxiosResponse<IBussinessResponse> =
      await ApiHelper.send<IBussinessResponse>({
        url: URL,
        method: "GET",
      });

    return res.data;
  }

  /**
   * add subscriber-to-business
   * @return {Promise<any>}
   */
  public static async addSubscriberToBussiness(
    payload: IAddSubscriberTobussinessRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `business/subscribe`,
      method: "POST",
      data: payload,
    });

    return res.data;
  }
}
