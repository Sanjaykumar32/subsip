import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IBannerResponse,
  IBussinessResponse,
  IBussinessRequest,
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
    "admin/bannerlist",
    async (): Promise<IBannerResponse> => {
      const response = await UserService.bannerList();
      return response;
    }
  );

  /**
   * get Business ById
   */
  public static allBusiness = createAsyncThunk(
    "admin/businessById",
    async (payload?: IBussinessRequest): Promise<IBussinessResponse> => {
      const response = await UserService.allBussinessById(payload);
      return response;
    }
  );
}
