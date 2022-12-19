import { RootState } from "data";

export const GET_ACCOUNT_TYPE = (state: RootState) => state.user.type;

export const GET_BANNER_LIST = (state: RootState) => state.user.bannerList;

export const GET_BUSSINESSBY_NAME = (state: RootState) =>
  state.user.AllBussinessById;
