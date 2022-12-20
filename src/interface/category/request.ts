import { Dayjs } from "dayjs";

export interface ICategoryRequest {
  categoryName: string;
}
export interface ISubCategoryRequest {
  businessCategory: string;
  subCategoryName: string;
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
  mileStoneName: string;
  referralAmount: string;
}

export interface INewRewardRequest {
  name: string;
  category: string;
  availibility: string;
  subCategory: string;
  businessName: string;
}

export interface INewNotifyButtonRequest {
  headline: string;
  date: Dayjs | null;
  description: string;
}

export interface INewNotificationRequest {
  headline: string;
  date: Dayjs | null;
  description: string;
  subCategory: string;
  businessName: string;
  category: string;
  businessLocation: string;
}

export interface ICreateListingRequest {
  businessName: string;
  headline: string;
  email: string;
  businessCategory: string;
  subCategory: string;
  productcategory: string;
  description: string;
  image: string;
  businessLocation: string;
}
