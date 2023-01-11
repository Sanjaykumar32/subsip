import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IBannerResponse,
  IBussinessResponse,
  IBussinessRequest,
  IAddSubscriberTobussinessRequest,
  IAddSubcriberToBuisnessResponse,
  IDeleteSubscriberRequest,
  IDeleteSubscriberResponse,
} from "interface";
import { UserService } from "services";

/**
 * User Thunk Middleware
 */
export class UserThunk {
  /**
   * Fetch Profile
   */
  public static fetchProfile = createAsyncThunk(
    "user/profile/fetch",
    async () => {
      const response = await UserService.fetchProfile();
      return response;
    }
  );

  /**
   * Banner List
   */
  public static bannerList = createAsyncThunk(
    "user/bannerlist",
    async (): Promise<IBannerResponse> => {
      const response = await UserService.bannerList();
      return response;
    }
  );

  /**
   * get business by all / Id / name
   */
  public static business = createAsyncThunk(
    "user/business/ID/Name",
    async (payload?: IBussinessRequest): Promise<IBussinessResponse> => {
      const response = await UserService.bussiness(payload);
      return response;
    }
  );

  /**
   * Add Subscribers to Business
   */
  public static addSubscriberToBusiness = createAsyncThunk(
    "user/addSubscriberstoBusiness",
    async (payload: any): Promise<IAddSubcriberToBuisnessResponse> => {
      const response = await UserService.addSubscriberToBussiness(payload);
      return response;
    }
  );

  /**
   * delete Subscriber
   */
  public static deleteSubscriber = createAsyncThunk(
    "admin/deleteSubscriber",
    async (
      payload: IDeleteSubscriberRequest
    ): Promise<IDeleteSubscriberResponse> => {
      const response = await UserService.deleteSubscribers(payload);
      return response;
    }
  );
}
