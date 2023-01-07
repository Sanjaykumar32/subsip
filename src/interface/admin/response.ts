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
  iCountry: string;
  iState: number;
  iCity: number;
  vAddress: string;
  onBanner: number;
  vImage?: string;
  iCategory: string;
  iSubCategory: string;
  categoryName: string;
  subCategoryName: string;
  subscriberCount: number;
  vEmail: any;
}

export interface IReferralCountResponse {
  success: number;
  message: string;
  data: IRefferralCount[];
}

export interface IRefferralCount {
  referralCount: number;
}

export interface IReferralCodeResponse {
  success: number;
  message: string;
  data: IRefferralCode[];
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
  subCategoryName: string;
  iSubCategoryId: string;
  subCategoryCount: number;
}

export interface IGetSubCategoryResponse {
  success: number;
  message: string;
  data: ISubCategoryData[];
}

export interface ISubCategoryData {
  iSubCategoryId: number;
  iCategoryId: string;
  vName: string;
  eStatus: string;
  dtAddedDate: string;
  iAddedBy: number;
  dtModifiedDate?: string;
  iModifiedBy?: number;
}

export interface ICategoryDataResponse {
  success: number;
  message: string;
  data: number[];
}

export interface INotificationResponse {
  success: number;
  message: string;
  data: INotificationdata[];
}

export interface INotificationdata {
  iNotificationId: number;
  vHeadline: string;
  vDesc: string;
  dDate: string;
  vBusinessLocation: string;
  iCategoryId: number;
  iSubCategoryId: number;
  iBusinessId: number;
}

export interface IRewardResponse {
  success: number;
  message: string;
  data: IReward[];
}

export interface IReward {
  iBusinessId: number;
  businessName: string;
  rewardNames: string;
  rewardCount: number;
}

export interface IUserRewardresponse {
  success: number;
  message: string;
  data: IUserReward[];
}

export interface IUserReward {
  userId: number;
  rewardName: string;
  rewardId: number;
  businessName: string;
  redeemedCount: number;
}

export interface IBusinessRewardResponse {
  success: number;
  message: string;
  data: IBusinessReward[];
}

export interface IBusinessReward {
  userId: number;
  rewardName: string;
  rewardId: number;
  userName: string;
  redeemedId?: number;
}

export interface IDashboardResponse {
  success: number;
  message: string;
  data: IDashboard[];
}

export interface IDashboard {
  title: string;
  count: number;
}

export interface IAddSubcriberToBuisnessResponse {
  success: number;
  message: string;
  data: [];
}
