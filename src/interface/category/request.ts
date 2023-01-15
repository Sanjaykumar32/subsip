import { Dayjs } from "dayjs";

export interface IUpdateCategoryRequest {
  name: string;
  categoryId: number;
}

export interface ICategoryRequest {
  name: string;
  addedBy: number;
}
export interface ISubCategoryRequest {
  categoryId: string;
  name: string;
  addedBy: number;
}

export interface IRewardClaimedRequest {
  rewardId: number;
}

export interface IUpdateSubCategoryRequest {
  subCategoryId: number;
  name: string;
}
export interface Filter {
  key: string;
  value: string;
}

export interface Sort {
  prop: string;
  dir: string;
}

export interface IHomeRequest {
  limit: number;
  filters: Filter[];
}

export interface Filter {
  key: string;
  value: string;
}

export interface IReferralPriceRequest {
  name: string;
  amount: number;
  milestoneID?: number;
}

export interface INewRewardRequest {
  name: string;
  category: string;
  availibility: number;
  subCategory: string;
  businessId: string;
}

export interface INewNotifyButtonRequest {
  headline: string;
  date: any;
  desc: string;
  userIds: [];
}

export interface INewNotificationRequest {
  headline: string;
  desc: string;
  date: any;
  businessLocation: string;
  categoryId: string;
  subCategoryId: string;
  businessId: string;
}

export interface ICreateListingRequest {
  name: string;
  tagline: string;
  latitude: string;
  longitute: string;
  location: string;
  description: string;
  addedBy: string;
  status: string;
  type: string;
  country: string;
  state: string;
  city: string;
  onBanner: boolean;
  image: any;
  email: string;
  category: string;
  subCategory: string;
}

export interface IDeleteListingRequest {
  userID: number;
}

export interface IDeleteReferralRequest {
  userID: number;
}

export interface IDeleteCategoryRequest {
  categoryId: number;
}

export interface IDeleteSubCategoryRequest {
  subCategoryId: number;
}

export interface IDeleteRewardRequest {
  rewardId: number;
}

export interface IDeleteNotificationRequest {
  notificationId: number;
}

export interface IGetAllUsetRequest {
  userId: number;
}

export interface IGetBusinesRewardRequest {
  businessId: number;
}

export interface IGetUserRewardRequest {
  userId: number;
}

export interface IDeleteRewardRequest {
  rewardId: number;
}

export interface IAddSubcriberToBuinessRequest {
  userId: number;
  businessId: number;
  referredCode: string;
}

export interface IGetNotificationRequest {
  userID: number;
}

export interface IReadNotificationRequest {
  notificationId: number;
  read: {
    read: number;
  };
}
