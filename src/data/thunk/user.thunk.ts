import { createAsyncThunk } from "@reduxjs/toolkit";
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
}
