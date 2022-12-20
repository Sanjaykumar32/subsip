import { createSlice } from "@reduxjs/toolkit";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ReducerEnum } from "enum";

import {
  IGetCategoryResponse,
  IGetSubCategoryResponse,
  IReferralCountResponse,
  IRefferralCode,
  ISubscribeByBussinessIDResponse,
  ISubscriberData,
  ISubscriberOfBussinessResponse,
} from "interface";

export interface IAdminState {
  adminSubscribers: ISubscribeByBussinessIDResponse;
  bussinessSubscribers: ISubscribeByBussinessIDResponse;
  subscriberOfBussiness: ISubscriberData[];
  AllsubscriberOfBussiness: ISubscriberOfBussinessResponse;
  category: IGetCategoryResponse;
  subCategory: IGetSubCategoryResponse;
  refferralCode: IRefferralCode;
  refferralCount: IReferralCountResponse;
}

const initialState: IAdminState = {
  adminSubscribers: {} as ISubscribeByBussinessIDResponse,
  bussinessSubscribers: {} as ISubscribeByBussinessIDResponse,
  subscriberOfBussiness: [],
  AllsubscriberOfBussiness: {} as ISubscriberOfBussinessResponse,
  refferralCode: {} as IRefferralCode,
  refferralCount: {} as IReferralCountResponse,
  category: {} as IGetCategoryResponse,
  subCategory: {} as IGetSubCategoryResponse,
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

    builder.addCase(AdminThunk.refferralCode.fulfilled, (state, action) => {
      if (action.payload) {
        state.refferralCode = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.getCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.category = action.payload;
      }
    });
    builder.addCase(AdminThunk.getSubCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.subCategory = action.payload;
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
