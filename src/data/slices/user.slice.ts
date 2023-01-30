import { createSlice } from "@reduxjs/toolkit";
import { UserThunk } from "data/thunk/user.thunk";
import { AccountTypeEnum, ReducerEnum } from "enum";
import { IBannerData, IBusiness } from "interface";

export interface IUserState {
  type: AccountTypeEnum;
  name: string;
  lastName: string;
  profilePic: string;
  bannerList: IBannerData[];
  AllBussinessById: IBusiness[];
  getReferralUser: any[];
}

const initialState: IUserState = {
  type: AccountTypeEnum.GUEST,
  name: "",
  lastName: "",
  profilePic: "",
  bannerList: [],
  AllBussinessById: [],
  getReferralUser: [],
};

export const userSlice = createSlice({
  name: ReducerEnum.USER,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(UserThunk.fetchProfile.fulfilled, (state, action) => {
      if (action.payload.type) {
        state.type = action.payload.type;
      }
    });
    builder.addCase(UserThunk.bannerList.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.bannerList = action.payload.data;
      }
    });
    builder.addCase(UserThunk.business.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.AllBussinessById = action.payload.data;
      }
    });
    builder.addCase(UserThunk.getReferralUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.getReferralUser = action.payload.data;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const userActions = { ...userSlice.actions };

export default userSlice.reducer;
