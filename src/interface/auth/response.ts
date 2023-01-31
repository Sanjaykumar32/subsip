export interface ISignInResponse {
  success: number;
  message: string;
  token: IToken;
  data: IData;
}

export interface IData {
  userId: string;
  iGroupId:string
}

export interface IToken {
  success: number;
  message: string;
  token: string;
}

export interface IBannerResponse {
  success: number;
  message: string;
  data: IBannerData[];
}

export interface ISignUpResponse {
  success: number;
  message: string;
  data: ISignUp[];
}

export interface ISignUp {
  insert_id: number;
}

export interface IBannerData {
  subscriberIds: string;
  iBusinessId: number;
  vName: string;
  vTagLine: string;
  dLatitude: number;
  dLongitude: string;
  vLocation: string;
  tDescription: string;
  dtAddedDate: string;
  iAddedBy: number;
  dtModifiedDate: string;
  eStatus: string;
  eType: string;
  iCountry: number;
  iState: number;
  iCity: number;
  vAddress: string;
  onBanner: number;
  vImage: string;
  iCategory: number;
  iSubCategory: number;
  vEmail: string;
  iTagCategory: string;
  categoryName: string;
  subCategoryName: string;
  subscriberCount: number;
}
