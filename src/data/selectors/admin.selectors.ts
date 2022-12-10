import { RootState } from "data";

export const GET_SUBSCRIBE_BY_BUSSINESS = (state: RootState) =>
  state.admin.bussinessSubscribers;

export const GET_SUBSCRIBE_BY_ADMIN = (state: RootState) =>
  state.admin.adminSubscribers;
