/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";

import { ApiHelper, StringHelper } from "helpers";
import {
  IAllBusinessSubscribersRequest,
  ICategoryRequest,
  IHomeRequest,
  INewNotifyButtonRequest,
  INewRewardRequest,
  IReferralCodeResponse,
  IReferralCountResponse,
  IReferralPriceRequest,
  IRefferralCodeRequest,
  IRefferralCountRequest,
  ISubCategoryRequest,
  ISubscribeByAdminIdRequest,
  ISubscribeByBussinessIDRequest,
  ISubscribeByBussinessIDResponse,
  ISubscriberOfBussinessResponse,
} from "interface";

/**
 * Admin Service
 */
export class AdminService {
  /**
   * Subscribe By businessId
   * @param {ISubscribeByBussinessIDRequest} payload
   * @return {Promise<ISubscribeByBussinessIDResponse>}
   */
  public static async subscribeByBuissnessID(
    payload: ISubscribeByBussinessIDRequest
  ): Promise<ISubscribeByBussinessIDResponse> {
    const res: AxiosResponse<ISubscribeByBussinessIDResponse> =
      await ApiHelper.send<ISubscribeByBussinessIDResponse>({
        // url: `/subscribers?businessId=${payload.businessId}`,
        url: StringHelper.translationHelper(
          "/subscribers?businessId=%s",
          payload.businessId.toString()
        ),
        method: "GET",
      });

    return res.data;
  }

  /**
   * Subscribe By adminId
   * @param {ISubscribeByAdminIdRequest} payload
   * @return {Promise<ISubscribeByBussinessIDResponse>}
   */
  public static async subscribeByAdminId(
    payload: ISubscribeByAdminIdRequest
  ): Promise<ISubscribeByBussinessIDResponse> {
    const res: AxiosResponse<ISubscribeByBussinessIDResponse> =
      await ApiHelper.send<ISubscribeByBussinessIDResponse>({
        url: `/subscribers?adminId=${payload.adminId}`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * subscriber of bussiness
   * @return {Promise<ISubscriberOfBussinessResponse>}
   */
  public static async subscriberOfBussiness(
    payload: ISubscribeByBussinessIDRequest
  ): Promise<ISubscriberOfBussinessResponse> {
    const res: AxiosResponse<ISubscriberOfBussinessResponse> =
      await ApiHelper.send<ISubscriberOfBussinessResponse>({
        url: `/business/subscriber?businessId=${payload.businessId}`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * All subscriber of bussiness
   * @return {Promise<ISubscriberOfBussinessResponse>}
   */
  public static async allSubscriberOfBussiness(
    payload: IAllBusinessSubscribersRequest
  ): Promise<ISubscriberOfBussinessResponse> {
    const res: AxiosResponse<ISubscriberOfBussinessResponse> =
      await ApiHelper.send<ISubscriberOfBussinessResponse>({
        url: `/business/subscriber?userId=${payload.userId}`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * refferral code
   * @return {Promise<IReferralCodeResponse>}
   */
  public static async refferralCode(
    payload: IRefferralCodeRequest
  ): Promise<IReferralCodeResponse> {
    const res: AxiosResponse<IReferralCodeResponse> =
      await ApiHelper.send<IReferralCodeResponse>({
        url: `user/referral?userId=${payload.userId}`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * refferral count
   * @return {Promise<IReferralCountResponse>}
   */
  public static async refferralCount(
    payload: IRefferralCountRequest
  ): Promise<IReferralCountResponse> {
    const res: AxiosResponse<IReferralCountResponse> =
      await ApiHelper.send<IReferralCountResponse>({
        url: `/buser/referral-count?userId=${payload.userId}`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * category
   * @param {ICategoryRequest} credentials
   * @return {Promise<void>}
   */
  public static async category(credentials: ICategoryRequest): Promise<void> {
    const res: AxiosResponse<void> = await ApiHelper.send<void>({
      url: "/category/list",
      method: "POST",
      data: credentials,
    });

    return res.data;
  }

  /**
   * subcategory
   * @param {ISubCategoryRequest} credentials
   * @return {Promise<void>}
   */
  public static async subCategory(
    credentials: ISubCategoryRequest
  ): Promise<void> {
    const res: AxiosResponse<void> = await ApiHelper.send<void>({
      url: "/auth/forgot-password",
      method: "POST",
      data: credentials,
    });

    return res.data;
  }

  /**
   * Home
   * @param {IHomeRequest} credentials
   * @return {Promise<void>}
   */
  public static async home(credentials: IHomeRequest): Promise<void> {
    const res: AxiosResponse<void> = await ApiHelper.send<void>({
      url: "/auth/forgot-password",
      method: "POST",
      data: credentials,
    });

    return res.data;
  }

  /**
   * New Referral Price
   * @param {IReferralPriceRequest} payload
   * @return {Promise<any>}
   */
  public static async newReferralPrice(
    payload: IReferralPriceRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/referralPrice",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * New Reward
   * @param {INewRewardRequest} payload
   * @return {Promise<any>}
   */
  public static async newReward(payload: INewRewardRequest): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/rewards",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * New NotifyButton
   * @param {INewNotifyButtonRequest} payload
   * @return {Promise<any>}
   */
  public static async newNotifyButton(
    payload: INewNotifyButtonRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/notify-button",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * Delete Business
   * @return {Promise<any>}
   */
  // public static async deleteBusiness(payload: any): Promise<any> {
  //   const res: AxiosResponse<any> = await ApiHelper.send<any>({
  //     url: `business/4`,
  //     method: "DELETE",
  //   });

  //   return res.data;
  // }

  /**
   * Delete Subscribers
   * @return {Promise<any>}
   */
  // public static async deleteSubscribers(payload: any): Promise<any> {
  //   const res: AxiosResponse<any> = await ApiHelper.send<any>({
  //     url: `/subscriber/2`,
  //     method: "DELETE",
  //   });

  //   return res.data;
  // }
}
