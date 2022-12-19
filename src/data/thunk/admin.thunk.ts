import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAllBusinessSubscribersRequest,
  ICategoryRequest,
  IHomeRequest,
  IReferralCodeResponse,
  IReferralCountResponse,
  IRefferralCodeRequest,
  IRefferralCountRequest,
  ISubCategoryRequest,
  ISubscribeByAdminIdRequest,
  ISubscribeByBussinessIDRequest,
  ISubscribeByBussinessIDResponse,
  ISubscriberOfBussinessResponse,
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
    async (
      payload: IRefferralCountRequest
    ): Promise<IReferralCountResponse> => {
      const response = await AdminService.refferralCount(payload);
      return response;
    }
  );

  /**
   * category
   */
  public static category = createAsyncThunk(
    "admin/category",
    async (payload: ICategoryRequest): Promise<void> => {
      const response = await AdminService.category(payload);
      return response;
    }
  );

  /**
   * subCategory
   */
  public static subCategory = createAsyncThunk(
    "admin/subCategory",
    async (payload: ISubCategoryRequest): Promise<void> => {
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
   * Delete Business
   */
  // public static deleteBusiness = createAsyncThunk(
  //   "admin/deleteBusiness",
  //   async (payload: any): Promise<void> => {
  //     const response = await AdminService.deleteBusiness(payload);
  //     return response;
  //   }
  // );

  /**
   * Delete Subscribers
   */
  // public static deleteSubscribers = createAsyncThunk(
  //   "admin/deleteSubscribers",
  //   async (payload: any): Promise<void> => {
  //     const response = await AdminService.deleteSubscribers(payload);
  //     return response;
  //   }
  // );
}
