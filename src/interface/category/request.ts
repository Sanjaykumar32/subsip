import { Dayjs } from "dayjs";

export interface ICategoryRequest {
  name: string;
  addedBy: number;
}
export interface ISubCategoryRequest {
  categoryId: string;
  name: string;
  addedBy: number;
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
  Headline: string;
  Desc: string;
  Date: string;
  BusinessLocation: string;
  CategoryId: string;
  SubCategoryId: string;
  BusinessId: string;
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
