import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignInRequest, ISignInResponse } from "interface";
import { AuthService } from "services/authentication";

/**
 * Authentication Thunk Middleware
 */
export class AuthenticationThunk {
  public static SignIn = createAsyncThunk(
    "authentication/signin/admin",
    async (credentials: ISignInRequest): Promise<ISignInResponse> => {
      const response = await AuthService.adminSignIn(credentials);
      return response;
    }
  );
}
