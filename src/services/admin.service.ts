/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";

import { ApiHelper, StringHelper } from "helpers";
import {
  IAllBusinessSubscribersRequest,
  ICategoryRequest,
  ICategoryDataResponse,
  ICreateListingRequest,
  IGetCategoryResponse,
  IGetSubCategoryResponse,
  IHomeRequest,
  INewNotificationRequest,
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
  INotificationRequest,
  IDeleteListingRequest,
  IDeleteCategoryRequest,
  IDeleteRewardRequest,
  INotificationResponse,
  IDeleteNotificationRequest,
  IRewardResponse,
  IUpdateCategoryRequest,
  IGetAllUsetRequest,
  IUserRewardresponse,
  IBusinessRewardResponse,
  IGetBusinesRewardRequest,
  IGetUserRewardRequest,
  IDashboardResponse,
  IAddSubcriberToBuinessRequest,
  IAddSubcriberToBuisnessResponse,
  IUpdateSubCategoryResponse,
  IUpdateSubCategoryRequest,
  IGetNotificationRequest,
  IReadNotificationRequest,
  IRewardClaimedRequest,
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
   * admin Notification List
   * @return {Promise<INotificationResponse>}
   */
  public static async getNotoification(): Promise<INotificationResponse> {
    const res: AxiosResponse<INotificationResponse> = await ApiHelper.send<any>(
      {
        url: `/notification`,
        method: "GET",
      }
    );

    return res.data;
  }

  /**
   * User update Notification
   * @param {IGetNotificationRequest} payload
   * @return {Promise<any>}
   */
  public static async getNotification(
    payload: IGetNotificationRequest
  ): Promise<any> {
    try {
      const res: AxiosResponse<any> = await ApiHelper.send<any>({
        url: `/user/notification/${payload.userID}`,
        method: "GET",
      });
      return res.data;
    } catch (err: any) {
      localStorage.clear();
      // console.log(err?.response?.status, 'this is catch err')
    }
  }

  /**
   * read Notification
   * @param {IUpdateCategoryRequest} credentials
   * @return {Promise<ICategoryDataResponse>}
   */
  public static async updateCategory(
    credentials: IUpdateCategoryRequest
  ): Promise<ICategoryDataResponse> {
    const res: AxiosResponse<ICategoryDataResponse> =
      await ApiHelper.send<ICategoryDataResponse>({
        url: "/category",
        method: "PUT",
        data: credentials,
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
        url: `/business/subscriber?userId=${payload.userId}${
          payload?.businessId ? `&businessId=${payload.businessId}` : ""
        }`,
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
   * @return {Promise<any>}
   */
  public static async refferralCount(
    payload: IRefferralCountRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/user/milestone/${payload.userId}`,
      method: "GET",
    });

    return res.data;
  }

  /**
   * create category
   * @param {ICategoryRequest} credentials
   * @return {Promise<ICategoryDataResponse>}
   */
  public static async category(
    credentials: ICategoryRequest
  ): Promise<ICategoryDataResponse> {
    const res: AxiosResponse<ICategoryDataResponse> =
      await ApiHelper.send<ICategoryDataResponse>({
        url: "/category",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }

  /**
   * Add Subcriber To Business
   * @param {IAddSubcriberToBuinessRequest} credentials
   * @return {Promise<IAddSubcriberToBuisnessResponse>}
   */
  public static async AddSubscriberToBusiness(
    credentials: IAddSubcriberToBuinessRequest
  ): Promise<IAddSubcriberToBuisnessResponse> {
    const res: AxiosResponse<IAddSubcriberToBuisnessResponse> =
      await ApiHelper.send<IAddSubcriberToBuisnessResponse>({
        url: "/business/subscribe",
        method: "POST",
        data: credentials,
      });

    return res.data;
  }

  /**
   * read Notification
   * @param {IReadNotificationRequest} payload
   * @return {Promise<any>}
   */
  public static async readNotification(
    payload: IReadNotificationRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/user/notification/${payload.notificationId}`,
      method: "PUT",
      data: payload.read,
    });

    return res.data;
  }

  /**
   * update subcategory
   * @param {IUpdateSubCategoryRequest} credentials
   * @return {Promise<IUpdateSubCategoryResponse>}
   */
  public static async updateSubCategory(
    credentials: IUpdateSubCategoryRequest
  ): Promise<IUpdateSubCategoryResponse> {
    const res: AxiosResponse<IUpdateSubCategoryResponse> =
      await ApiHelper.send<IUpdateSubCategoryResponse>({
        url: "/sub-category/",
        method: "PUT",
        data: credentials,
      });

    return res.data;
  }

  /**
   * get category
   * @return {Promise<IGetCategoryResponse>}
   */
  public static async getcategory(): Promise<IGetCategoryResponse> {
    const res: AxiosResponse<IGetCategoryResponse> =
      await ApiHelper.send<IGetCategoryResponse>({
        url: "/category/list",
        method: "GET",
      });
    return res.data;
  }

  /**
   * Reward To Winner
   * @return {Promise<IUserRewardresponse>}
   */
  public static async getRewardToWinner(
    payload: IGetUserRewardRequest
  ): Promise<IUserRewardresponse> {
    const res: AxiosResponse<IUserRewardresponse> =
      await ApiHelper.send<IUserRewardresponse>({
        url: `/user/reward?userId=${payload.userId}`,
        method: "GET",
      });
    return res.data;
  }

  /**
   * refferal list
   * @return {Promise<any>}
   */
  public static async getRefferal(): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/user/milestone/4",
      method: "GET",
    });
    return res.data;
  }

  /**
   * sub category
   * @return {Promise<any>}
   */
  public static async getSubcategory(): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/sub-category/list",
      method: "GET",
    });
    return res.data;
  }

  /**
   * reward Claimed
   * @return {Promise<any>}
   */
  public static async rewardClaimed(
    payload: IRewardClaimedRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/user/reward-redeem",
      method: "POST",
      data: payload,
    });
    return res.data;
  }

  /**
   * subcategory
   * @param {ISubCategoryRequest} credentials
   * @return {Promise<ICategoryDataResponse>}
   */
  public static async subCategory(
    credentials: ISubCategoryRequest
  ): Promise<ICategoryDataResponse> {
    const res: AxiosResponse<ICategoryDataResponse> =
      await ApiHelper.send<ICategoryDataResponse>({
        url: "/sub-category",
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
      url: "/milestone",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * Update Referral Price
   * @param {IReferralPriceRequest} payload
   * @return {Promise<any>}
   */
  public static async updateReferralPrice(payload: any): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/milestone/${payload?.milestoneID}`,
      method: "PUT",
      data: payload.data,
    });

    return res.data;
  }

  /**
   * New Reward
   * @param {any} payload
   * @return {Promise<any>}
   */
  public static async newReward(payload: any): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/user/notification",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * New Reward
   * @param {any} payload
   * @return {Promise<any>}
   */
  public static async adminNewReward(payload: any): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/user/reward",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * admin Reward
   * @return {Promise<IRewardResponse>}
   */
  public static async getReward(): Promise<IRewardResponse> {
    const res: AxiosResponse<IRewardResponse> = await ApiHelper.send<any>({
      url: `/reward`,
      method: "GET",
    });
    return res.data;
  }

  /**
   * user Reward
   * @return {Promise<IUserRewardresponse>}
   */
  public static async getUserReward(
    payload: IGetAllUsetRequest
  ): Promise<IUserRewardresponse> {
    const res: AxiosResponse<IUserRewardresponse> = await ApiHelper.send<any>({
      url: `user/reward?userId=${payload.userId}`,
      method: "GET",
    });
    return res.data;
  }

  /**
   * get Business Reward
   * @return {Promise<IBusinessRewardResponse>}
   */
  public static async getBusinessReward(
    payload: IGetBusinesRewardRequest
  ): Promise<IBusinessRewardResponse> {
    const res: AxiosResponse<IBusinessRewardResponse> =
      await ApiHelper.send<any>({
        url: `/user/reward/business?businessId=${payload.businessId}`,
        method: "GET",
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
   * New Notification
   * @param {INewNotificationRequest} payload
   * @return {Promise<any>}
   */
  public static async newNotification(
    payload: INewNotificationRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/user/notification",
      method: "POST",
      data: payload,
    });

    return res.data;
  }

  /**
   * create listing
   * @param {ICreateListingRequest} payload
   * @return {Promise<any>}
   */
  public static async craeteListing(payload: any): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: "/business",
      method: "POST",
      data: payload,
    });
    return res.data;
  }

  /**
   * Update listing
   * @param {ICreateListingRequest} payload
   * @return {Promise<any>}
   */
  public static async updateListing(payload: any): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/business/${payload?.iBusinessId}`,
      method: "PUT",
      data: payload?.data,
    });
    return res.data;
  }

  /**
   * Delete Business
   * @return {Promise<any>}
   */
  public static async deleteBusiness(
    payload: IDeleteListingRequest
  ): Promise<any> {
    console.log(payload);
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `business/${payload}`,
      method: "DELETE",
    });
    return res.data;
  }

  /**
   * Delete Referral
   * @return {Promise<any>}
   */
  public static async deleteReferral(payload: any): Promise<any> {
    console.log(payload);
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `milestone/${payload}`,
      method: "DELETE",
    });
    return res.data;
  }

  /**
   * Delete Category
   * @return {Promise<any>}
   */
  public static async deleteCategory(
    payload: IDeleteCategoryRequest
  ): Promise<any> {
    console.log(payload);
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/category`,
      method: "DELETE",
      data: payload,
    });

    return res.data;
  }

  /**
   * Delete SubCategory
   * @return {Promise<any>}
   */
  public static async deleteSubCategory(
    payload: IDeleteListingRequest
  ): Promise<any> {
    console.log(payload);
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/sub-category`,
      method: "DELETE",
      data: payload,
    });

    return res.data;
  }

  /**
   * Delete Notification
   * @return {Promise<any>}
   */
  public static async deleteNotification(
    payload: IDeleteNotificationRequest
  ): Promise<any> {
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/notification/${payload.notificationId}`,
      method: "DELETE",
    });

    return res.data;
  }

  /**
   * Delete Reward
   * @return {Promise<any>}
   */
  public static async deleteReward(
    payload: IDeleteRewardRequest
  ): Promise<any> {
    console.log(payload);
    const res: AxiosResponse<any> = await ApiHelper.send<any>({
      url: `/user/reward?rewardId=${payload.rewardId}`,
      method: "DELETE",
    });

    return res.data;
  }

  /**
   * dashboard Response
   * @return {Promise<IDashboardResponse>}
   */
  public static async getDashboardCount(): Promise<IDashboardResponse> {
    const res: AxiosResponse<IDashboardResponse> = await ApiHelper.send<any>({
      url: `/dashboard`,
      method: "GET",
    });
    return res.data;
  }
}
