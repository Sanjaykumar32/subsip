import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAllBusinessSubscribersRequest,
  IBannerResponse,
  IBussinessRequest,
  IBussinessResponse,
  ICategoryRequest,
  IHomeRequest,
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
   * Banner List
   */
  public static bannerList = createAsyncThunk(
    "admin/bannerlist",
    async (): Promise<IBannerResponse> => {
      const response = await AdminService.bannerList();
      return response;
    }
  );

  /**
   * get All Business
   */
  public static business = createAsyncThunk(
    "admin/business",
    async (): Promise<IBussinessResponse> => {
      const response = await AdminService.bussiness();
      return response;
    }
  );

  /**
   * get Business ById
   */
  public static allBusiness = createAsyncThunk(
    "admin/businessById",
    async (payload: IBussinessRequest): Promise<IBussinessResponse> => {
      const response = await AdminService.allBussinessById(payload);
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
}
