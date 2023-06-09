import { RootState } from "data";

export const GET_ACCOUNT_TYPE = (state: RootState) => state.user.type;

export const GET_BANNER_LIST = (state: RootState) => state.user.bannerList;

export const GET_BUSINESS = (state: RootState) => state.user.AllBussinessById;

export const GET_USER_REFERRAL = (state: RootState) =>
  state.admin.getReferralUser;
