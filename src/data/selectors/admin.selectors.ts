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
