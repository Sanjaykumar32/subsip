import { createSlice } from "@reduxjs/toolkit";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ReducerEnum } from "enum";

import {
  IBannerResponse,
  IBussinessResponse,
  IReferralCodeResponse,
  IReferralCountResponse,
  ISubscribeByBussinessIDResponse,
  ISubscriberOfBussinessResponse,
} from "interface";

export interface IAdminState {
  adminSubscribers: ISubscribeByBussinessIDResponse;
  bussinessSubscribers: ISubscribeByBussinessIDResponse;
  bannerList: IBannerResponse;
  subscriberOfBussiness: ISubscriberOfBussinessResponse;
  AllsubscriberOfBussiness: ISubscriberOfBussinessResponse;
  Bussiness: IBussinessResponse;
  AllBussinessById: IBussinessResponse;
  refferralCode: IReferralCodeResponse;
  refferralCount: IReferralCountResponse;
}

const initialState: IAdminState = {
  adminSubscribers: {} as ISubscribeByBussinessIDResponse,
  bussinessSubscribers: {} as ISubscribeByBussinessIDResponse,
  bannerList: {} as IBannerResponse,
  subscriberOfBussiness: {} as ISubscriberOfBussinessResponse,
  AllsubscriberOfBussiness: {} as ISubscriberOfBussinessResponse,
  Bussiness: {} as IBussinessResponse,
  AllBussinessById: {} as IBussinessResponse,
  refferralCode: {} as IReferralCodeResponse,
  refferralCount: {} as IReferralCountResponse,
};

export const adminSlice = createSlice({
  name: ReducerEnum.ADMIN,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(
      AdminThunk.subscribeByAdminId.fulfilled,
      (_state, action) => {
        action.payload;
      }
    );
    builder.addCase(
      AdminThunk.subscribeByBussinessId.fulfilled,
      (_state, action) => {
        action.payload;
      }
    );
    builder.addCase(AdminThunk.bannerList.fulfilled, (_state, action) => {
      action.payload;
    });

    builder.addCase(
      AdminThunk.subscribeOfBussiness.fulfilled,
      (_state, action) => {
        action.payload;
      }
    );
    builder.addCase(
      AdminThunk.allSubscriberOfBussiness.fulfilled,
      (_state, action) => {
        action.payload;
      }
    );
    builder.addCase(AdminThunk.business.fulfilled, (_state, action) => {
      action.payload;
    });
    builder.addCase(AdminThunk.allBusiness.fulfilled, (_state, action) => {
      action.payload;
    });
    builder.addCase(AdminThunk.refferralCode.fulfilled, (_state, action) => {
      action.payload;
    });
    builder.addCase(AdminThunk.refferralCount.fulfilled, (_state, action) => {
      action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const adminActions = { ...adminSlice.actions };

export default adminSlice.reducer;
