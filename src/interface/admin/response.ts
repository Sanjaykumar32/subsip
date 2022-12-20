export interface ISubscribeByBussinessIDResponse {
  success: number;
  message: string;
  data: IBusinessSubscribe[];
}

export interface IBusinessSubscribe {
  iSubscriberId: number;
  iAdminId: number;
  iBusinessId: number;
  dtAddedDate: string;
}

export interface ISubscriberOfBussinessResponse {
  success: number;
  message: string;
  data: ISubscriberData[];
}

export interface ISubscriberData {
  iSubscriberId: number;
  iAdminId: number;
  iBusinessId: number;
  dtAddedDate: string;
  vName: string;
  vEmail: string;
  vPassword: string;
  iGroupId: string;
  eStatus: string;
  vAuthCode: string;
  eEmailVerified: string;
  vReferralCode: string;
}

export interface IBussinessResponse {
  success: number;
  message: string;
  data: IBusiness[];
}

export interface IBusiness {
  iBusinessId: number;
  vName: string;
  vTagLine: string;
  dLatitude: number;
  dLongitude: number;
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
  vImage?: string;
  iCategory: number;
  iSubCategory: number;
  categoryName: string;
  subCategoryName: string;
  subscriberCount: number;
}

export interface IReferralCountResponse {
  success: number;
  message: string;
  data: IRefferralCount;
}

export interface IRefferralCount {
  referralCount: number;
}

export interface IReferralCodeResponse {
  success: number;
  message: string;
  data: IRefferralCode;
}

export interface IRefferralCode {
  referralCode: string;
}

export interface IGetCategoryResponse {
  success: number;
  message: string;
  data: ICategoryData[];
}

export interface ICategoryData {
  iCategoryId: number;
  vName?: string;
  eStatus: string;
  dtAddedDate: string;
  iAddedBy?: number;
  dtModifiedDate: string;
  iModifiedBy: string;
}

export interface IGetSubCategoryResponse {
  keyword: string;
  limit: string;
  category_id: string;
  filters: IFilter[];
  sort: ISort[];
}

export interface IFilter {
  key: string;
  value: string;
}

export interface ISort {
  prop: string;
  dir: string;
}
