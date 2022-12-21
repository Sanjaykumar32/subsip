import { createSlice } from "@reduxjs/toolkit";
import { UserThunk } from "data/thunk/user.thunk";
import { AccountTypeEnum, ReducerEnum } from "enum";

export interface IUserState {
  type: AccountTypeEnum;
  name: string;
  lastName: string;
  profilePic: string;
}

const initialState: IUserState = {
  type: AccountTypeEnum.GUEST,
  name: "",
  lastName: "",
  profilePic: "",
};

export const userSlice = createSlice({
  name: ReducerEnum.USER,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addCase(UserThunk.fetchProfile.fulfilled, (_state, action) => ({
      ...action.payload,
    }));
  },
});

// Action creators are generated for each case reducer function
export const userActions = { ...userSlice.actions };

export default userSlice.reducer;
