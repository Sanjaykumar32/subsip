import { RootState } from "data";

export const GET_SUBSCRIBE_BY_BUSSINESS = (state: RootState) =>
  state.admin.bussinessSubscribers;

export const GET_SUBSCRIBE_BY_ADMIN = (state: RootState) =>
  state.admin.adminSubscribers;

export const GET_BANNER_LIST = (state: RootState) => state.admin.bannerList;

export const GET_SUBSCRIBER_OF_BUSSINESS = (state: RootState) =>
  state.admin.subscriberOfBussiness;

export const GET_ALL_SUBSCRIBER_OF_BUSINESS = (state: RootState) =>
  state.admin.AllsubscriberOfBussiness;
