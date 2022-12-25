import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IBannerResponse,
  IBussinessResponse,
  IBussinessRequest,
  IAddSubscriberTobussinessRequest,
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
   * Add Subscribers to Business Thunk
   */
  public static addSubscriberToBusiness = createAsyncThunk(
    "user/addSubscriberstoBusiness",
    async (payload: IAddSubscriberTobussinessRequest): Promise<any> => {
      const response = await UserService.addSubscriberToBussiness(payload);
      return response;
    }
  );
}



