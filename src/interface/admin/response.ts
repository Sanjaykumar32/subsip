export interface ISubscribeByBussinessIDResponse {
  success: number;
  message: string;
  data: Daum[];
}

export interface Daum {
  iSubscriberId: number;
  iAdminId: number;
  iBusinessId: number;
  dtAddedDate: string;
}

export interface ISubscriberOfBussinessResponse {
  success: number;
  message: string;
  data: Daum[];
}

export interface Daum {
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
  data: Daum[];
}

export interface Daum {
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
}
