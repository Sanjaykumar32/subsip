import { createSlice } from "@reduxjs/toolkit";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ReducerEnum } from "enum";

import {
  IBannerData,
  IBusiness,
  IReferralCountResponse,
  IRefferralCode,
  ISubscribeByBussinessIDResponse,
  ISubscriberData,
  ISubscriberOfBussinessResponse,
} from "interface";

export interface IAdminState {
  adminSubscribers: ISubscribeByBussinessIDResponse;
  bussinessSubscribers: ISubscribeByBussinessIDResponse;
  bannerList: IBannerData[];
  subscriberOfBussiness: ISubscriberData[];
  AllsubscriberOfBussiness: ISubscriberOfBussinessResponse;
  Bussiness: IBusiness[];
  AllBussinessById: IBusiness[];
  refferralCode: IRefferralCode;
  refferralCount: IReferralCountResponse;
}

const initialState: IAdminState = {
  adminSubscribers: {} as ISubscribeByBussinessIDResponse,
  bussinessSubscribers: {} as ISubscribeByBussinessIDResponse,
  bannerList: [],
  subscriberOfBussiness: [],
  AllsubscriberOfBussiness: {} as ISubscriberOfBussinessResponse,
  Bussiness: [],
  AllBussinessById: [],
  refferralCode: {} as IRefferralCode,
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
    builder.addCase(AdminThunk.bannerList.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.bannerList = action.payload.data;
      }
    });

    builder.addCase(
      AdminThunk.subscribeOfBussiness.fulfilled,
      (state, action) => {
        if (action.payload.data) {
          state.subscriberOfBussiness = action.payload.data;
        }
      }
    );
    builder.addCase(
      AdminThunk.allSubscriberOfBussiness.fulfilled,
      (_state, action) => {
        action.payload;
      }
    );
    builder.addCase(AdminThunk.business.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.Bussiness = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.allBusiness.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.AllBussinessById = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.refferralCode.fulfilled, (state, action) => {
      if (action.payload) {
        state.refferralCode = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.refferralCount.fulfilled, (_state, action) => {
      action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const adminActions = { ...adminSlice.actions };

export default adminSlice.reducer;
