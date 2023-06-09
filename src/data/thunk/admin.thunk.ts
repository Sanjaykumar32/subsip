import { createAsyncThunk } from "@reduxjs/toolkit";
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
  INotificationResponse,
  IDeleteNotificationRequest,
  IRewardResponse,
  IUpdateCategoryRequest,
  IUserRewardresponse,
  IGetAllUsetRequest,
  IGetBusinesRewardRequest,
  IBusinessRewardResponse,
  IGetUserRewardRequest,
  IDeleteRewardRequest,
  IDashboardResponse,
  IUpdateSubCategoryResponse,
  IUpdateSubCategoryRequest,
  IGetNotificationRequest,
  IReadNotificationRequest,
  IRewardClaimedRequest,
  IUserResponse,
} from "interface";
import { AdminService } from "services";

/**
 * Admin Thunk Middleware
 */
export class AdminThunk {
  /**
   * Subscribe By businessId
   */
  public static subscribeByBussinessId = createAsyncThunk(
    "admin/subscribeByBId",
    async (
      payload: ISubscribeByBussinessIDRequest
    ): Promise<ISubscribeByBussinessIDResponse> => {
      const response = await AdminService.subscribeByBuissnessID(payload);
      return response;
    }
  );

  public static getAllsubscribe = createAsyncThunk(
    "/subscribers",
    async (
    ): Promise<ISubscribeByBussinessIDResponse> => {
      const response = await AdminService.getAllsubscriber();
      return response;
    }
  );

  /**
   * Subscribe By adminId
   */
  public static subscribeByAdminId = createAsyncThunk(
    "admin/adminId",
    async (
      payload: ISubscribeByAdminIdRequest
    ): Promise<ISubscribeByBussinessIDResponse> => {
      const response = await AdminService.subscribeByAdminId(payload);
      return response;
    }
  );

  /**
   * Notification List
   */
  public static notificationList = createAsyncThunk(
    "admin/notification-list",
    async (): Promise<INotificationResponse> => {
      const response = await AdminService.getNotoification();
      return response;
    }
  );

  /**
   * Get Referral User
   */
  public static getReferralUser = createAsyncThunk(
    "admin/getReferralUser",
    async (): Promise<any> => {
      const response = await AdminService.getReferralUser();
      return response;
    }
  );

  /**
   * Subscriber of bussiness
   */
  public static subscribeOfBussiness = createAsyncThunk(
    "admin/subscriber",
    async (
      payload: ISubscribeByBussinessIDRequest
    ): Promise<ISubscriberOfBussinessResponse> => {
      const response = await AdminService.subscriberOfBussiness(payload);
      return response;
    }
  );

  /**
   * All Subscriber of bussiness
   */
  public static allSubscriberOfBussiness = createAsyncThunk(
    "admin/allSubscriber",
    async (
      payload: IAllBusinessSubscribersRequest
    ): Promise<ISubscriberOfBussinessResponse> => {
      const response = await AdminService.allSubscriberOfBussiness(payload);
      return response;
    }
  );

  /**
   * refferral code
   */
  public static refferralCode = createAsyncThunk(
    "admin/refferralcode",
    async (payload: IRefferralCodeRequest): Promise<IReferralCodeResponse> => {
      const response = await AdminService.refferralCode(payload);
      return response;
    }
  );

  /**
   * refferralCount
   */
  public static refferralCount = createAsyncThunk(
    "admin/refferalcount",
    async (payload: IRefferralCountRequest): Promise<any> => {
      const response = await AdminService.refferralCount(payload);
      return response;
    }
  );

  /**
   * category
   */
  public static category = createAsyncThunk(
    "admin/category",
    async (payload: ICategoryRequest): Promise<ICategoryDataResponse> => {
      const response = await AdminService.category(payload);
      return response;
    }
  );

  /**
   * update category
   */
  public static updateCategory = createAsyncThunk(
    "admin/update/category",
    async (payload: IUpdateCategoryRequest): Promise<ICategoryDataResponse> => {
      const response = await AdminService.updateCategory(payload);
      return response;
    }
  );

  /**
   * update subCategory
   */
  public static updateSubCategory = createAsyncThunk(
    "admin/update/subcategory",
    async (
      payload: IUpdateSubCategoryRequest
    ): Promise<IUpdateSubCategoryResponse> => {
      const response = await AdminService.updateSubCategory(payload);
      return response;
    }
  );

  /**
   * subCategory
   */
  public static subCategory = createAsyncThunk(
    "admin/subCategory",
    async (payload: ISubCategoryRequest): Promise<ICategoryDataResponse> => {
      const response = await AdminService.subCategory(payload);
      return response;
    }
  );

  /**
   * home
   */
  public static home = createAsyncThunk(
    "admin/home",
    async (payload: IHomeRequest): Promise<void> => {
      const response = await AdminService.home(payload);
      return response;
    }
  );

  /**
   * New Referral Price
   */
  public static newReferralPrice = createAsyncThunk(
    "admin/newReferralPrice",
    async (payload: IReferralPriceRequest): Promise<void> => {
      const response = await AdminService.newReferralPrice(payload);
      return response;
    }
  );

  /**
   * Update Referral Price
   */
  public static updateReferralPrice = createAsyncThunk(
    "admin/updateReferralPrice",
    async (payload: any): Promise<void> => {
      const response = await AdminService.updateReferralPrice(payload);
      return response;
    }
  );

  /**
   * Delete Business
   */
  public static deleteReferralPrice = createAsyncThunk(
    "admin/deleteReferralPrice",
    async (payload: any): Promise<void> => {
      const response = await AdminService.deleteReferral(payload);
      return response;
    }
  );

  /**
   * New Rewards
   */
  public static newReward = createAsyncThunk(
    "admin/newReward",
    async (payload: any): Promise<void> => {
      const response = await AdminService.newReward(payload);
      return response;
    }
  );

  /**
   * New Rewards
   */
  public static adminNewReward = createAsyncThunk(
    "admin/adminNewReward",
    async (payload: any): Promise<void> => {
      const response = await AdminService.adminNewReward(payload);
      return response;
    }
  );

  /**
   * Get Reward
   */
  public static getReward = createAsyncThunk(
    "admin/getReward",
    async (): Promise<IRewardResponse> => {
      const response = await AdminService.getReward();
      return response;
    }
  );


  /**
   * Get All User
   */
  public static getAllUser = createAsyncThunk(
    "admin/getAllUser",
    async (): Promise<any> => {
      const response = await AdminService.getAllUser();
      return response;
    }
  );

  /**
   * Get User Reward
   */
  public static getuserReward = createAsyncThunk(
    "admin/userGetReward",
    async (payload: IGetAllUsetRequest): Promise<IUserRewardresponse> => {
      const response = await AdminService.getUserReward(payload);
      return response;
    }
  );

  /**
   * Get User Notification
   */
  public static getUserNotification = createAsyncThunk(
    "admin/getuserNotification",
    async (payload: IGetNotificationRequest): Promise<any> => {
      const response = await AdminService.getNotification(payload);
      return response;
    }
  );

  /**
   * Get Business Reward
   */
  public static getBusinessReward = createAsyncThunk(
    "admin/getBusinessReward",
    async (
      payload: IGetBusinesRewardRequest
    ): Promise<IBusinessRewardResponse> => {
      const response = await AdminService.getBusinessReward(payload);
      return response;
    }
  );

  /**
   * New Notify Button
   */
  public static newNotifyButton = createAsyncThunk(
    "admin/newNotifyButton",
    async (payload: INewNotifyButtonRequest): Promise<void> => {
      const response = await AdminService.newReward(payload);
      return response;
    }
  );

  /**
   * New Notification
   */
  public static newNotification = createAsyncThunk(
    "admin/newNotification",
    async (payload: INewNotificationRequest): Promise<void> => {
      const response = await AdminService.newNotification(payload);
      return response;
    }
  );

  /**
   * Create Listing
   */
  public static createListing = createAsyncThunk(
    "admin/createListing",
    async (payload: any): Promise<void> => {
      const response = await AdminService.craeteListing(payload);
      return response;
    }
  );

  /**
   * Create Listing
   */
  public static updateListing = createAsyncThunk(
    "admin/update/createListing",
    async (payload: any): Promise<void> => {
      const response = await AdminService.updateListing(payload);
      return response;
    }
  );

  /**
   * New category
   */

  public static getCategory = createAsyncThunk(
    "admin/getCategory",
    async (): Promise<IGetCategoryResponse> => {
      const response = await AdminService.getcategory();
      return response;
    }
  );

  /**
   * UserReward To Winner
   */
  public static getRewardToWinner = createAsyncThunk(
    "admin/reward-to-winner",
    async (payload: IGetUserRewardRequest): Promise<IUserRewardresponse> => {
      const response = await AdminService.getRewardToWinner(payload);
      return response;
    }
  );

  /**
   * Referral list
   */
  public static refferalDetail = createAsyncThunk(
    "admin/refferalDetail",
    async (): Promise<any> => {
      const response = await AdminService.getRefferal();
      return response;
    }
  );

  /**
   * Create Listing
   */
  public static getSubCategory = createAsyncThunk(
    "admin/createListing",
    async (): Promise<any> => {
      const response = await AdminService.getSubcategory();
      return response;
    }
  );

  /**
   * Reward Claimed
   */
  public static rewardClaimed = createAsyncThunk(
    "admin/rewardClaimed",
    async (payload: IRewardClaimedRequest): Promise<any> => {
      const response = await AdminService.rewardClaimed(payload);
      return response;
    }
  );

  /**
   * Delete Business
   */
  public static deleteBusiness = createAsyncThunk(
    "admin/deleteBusiness",
    async (payload: any): Promise<void> => {
      const response = await AdminService.deleteBusiness(payload);
      return response;
    }
  );

  /**
   * categoey Business
   */
  public static deleteCategory = createAsyncThunk(
    "admin/deleteCategory",
    async (payload: any): Promise<void> => {
      const response = await AdminService.deleteCategory(payload);
      return response;
    }
  );

  /**
   * delete Notification
   */
  public static deleteNotification = createAsyncThunk(
    "admin/deleteNotification",
    async (payload: IDeleteNotificationRequest): Promise<void> => {
      const response = await AdminService.deleteNotification(payload);
      return response;
    }
  );

  /**
   * SubCategory Business
   */
  public static deleteSubCategory = createAsyncThunk(
    "admin/deleteSubCategory",
    async (payload: any): Promise<void> => {
      const response = await AdminService.deleteSubCategory(payload);
      return response;
    }
  );

  /**
   * delete Reward
   */
  public static deleteReward = createAsyncThunk(
    "admin/deleteReward",
    async (payload: IDeleteRewardRequest): Promise<void> => {
      const response = await AdminService.deleteReward(payload);
      return response;
    }
  );

  /**
   * Get DashBoardData
   */
  public static getdashboardCount = createAsyncThunk(
    "admin/dashboard",
    async (): Promise<IDashboardResponse> => {
      const response = await AdminService.getDashboardCount();
      return response;
    }
  );

  /**
   * Read user Notification
   */
  public static readUserNotification = createAsyncThunk(
    "admin/read/UserNotification",
    async (payload: IReadNotificationRequest): Promise<any> => {
      const response = await AdminService.readNotification(payload);
      return response;
    }
  );

  /**
   * Get User
   */
  public static getUser = createAsyncThunk(
    "admin/getUser",
    async (payload: any): Promise<IUserResponse> => {
      const response = await AdminService.getUser(payload);
      return response;
    }
  );
}
