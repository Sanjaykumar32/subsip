import { createSlice } from "@reduxjs/toolkit";
import { AdminThunk } from "data/thunk/admin.thunk";
import { ReducerEnum } from "enum";

import {
  IBusinessReward,
  ICategoryData,
  INotificationdata,
  IReferralCountResponse,
  IRefferralCode,
  IReward,
  ISubCategoryData,
  ISubscribeByBussinessIDResponse,
  ISubscriberData,
  ISubscriberOfBussinessResponse,
  IUserReward,
} from "interface";

export interface IAdminState {
  adminSubscribers: ISubscribeByBussinessIDResponse;
  bussinessSubscribers: ISubscribeByBussinessIDResponse;
  subscriberOfBussiness: ISubscriberData[];
  AllsubscriberOfBussiness: ISubscriberOfBussinessResponse;
  category: ICategoryData[];
  subCategory: ISubCategoryData[];
  refferralCode: IRefferralCode;
  refferralCount: IReferralCountResponse;
  noticationList: INotificationdata[];
  referralList: any;
  userRewardList: IUserReward[];
  rewardData: IReward[];
  bussinessRewardData: IBusinessReward[];
  userRewardData: IUserReward[];
}

const initialState: IAdminState = {
  adminSubscribers: {} as ISubscribeByBussinessIDResponse,
  bussinessSubscribers: {} as ISubscribeByBussinessIDResponse,
  subscriberOfBussiness: [],
  AllsubscriberOfBussiness: {} as ISubscriberOfBussinessResponse,
  refferralCode: {} as IRefferralCode,
  refferralCount: {} as IReferralCountResponse,
  category: [],
  subCategory: [],
  noticationList: [],
  referralList: [],
  userRewardList: [],
  rewardData: [],
  userRewardData: [],
  bussinessRewardData: [],
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
        state.category = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.notificationList.fulfilled, (state, action) => {
      if (action.payload) {
        state.noticationList = action.payload.data;
      }
    });

    builder.addCase(AdminThunk.refferalDetail.fulfilled, (state, action) => {
      if (action.payload) {
        state.referralList = action.payload.data;
      }
    });

    builder.addCase(AdminThunk.getSubCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.subCategory = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.refferralCount.fulfilled, (_state, action) => {
      action.payload;
    });
    builder.addCase(AdminThunk.getRewardToWinner.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.userRewardList = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.getReward.fulfilled, (state, action) => {
      if (action.payload) {
        state.rewardData = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.getuserReward.fulfilled, (state, action) => {
      if (action.payload) {
        state.userRewardData = action.payload.data;
      }
    });
    builder.addCase(AdminThunk.getBusinessReward.fulfilled, (state, action) => {
      if (action.payload) {
        state.bussinessRewardData = action.payload.data;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const adminActions = { ...adminSlice.actions };

export default adminSlice.reducer;
