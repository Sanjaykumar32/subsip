import { RootState } from "data";

export const GET_SUBSCRIBE_BY_BUSSINESS = (state: RootState) =>
  state.admin.bussinessSubscribers;

export const GET_SUBSCRIBE_BY_ADMIN = (state: RootState) =>
  state.admin.adminSubscribers;

export const GET_SUBSCRIBER_OF_BUSSINESS = (state: RootState) =>
  state.admin.subscriberOfBussiness;

export const GET_ALL_SUBSCRIBER_OF_BUSINESS = (state: RootState) =>
  state.admin.AllsubscriberOfBussiness;

export const GET_REFFERRAL_CODE = (state: RootState) =>
  state.admin.refferralCode;

export const GET_REFERRAL_COUNT = (state: RootState) =>
  state.admin.refferralCount;

export const GET_CATEGORY = (state: RootState) => state.admin.category;

export const GET_SUB_CATEGORY = (state: RootState) => state.admin.subCategory;

export const GET_NOTIFICATION = (state: RootState) =>
  state.admin.noticationList;

export const GET_REFERRAL_LIST = (state: RootState) => state.admin.referralList;

export const GET_RWARD_TO_WINNER_LIST = (state: RootState) =>
  state.admin.userRewardList;

export const GET_REWARDS = (state: RootState) => state.admin.rewardData;

export const GET_USER_REWARDS = (state: RootState) =>
  state.admin.userRewardData;

export const GET_BUSINESS_REWARDS = (state: RootState) =>
  state.admin.bussinessRewardData;

export const GET_DASHBOARD_COUNT = (state: RootState) =>
  state.admin.dashboardCount;

export const GET_USER_NOTIFICTAION = (state: RootState) =>
  state.admin.userNotification;

export const GET_USER = (state: RootState) => state.admin.getUser;
