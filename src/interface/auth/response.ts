export interface ISignInResponse {
  success: number;
  message: string;
  token: IToken;
}

export interface IToken {
  success: number;
  message: string;
  token: string;
}

export interface IBannerResponse {
  success: number;
  message: string;
  data: Daum[];
}

export interface ISignUpResponse {
  success: number;
  message: string;
  data: ISignUp[];
}

export interface ISignUp {
  insert_id: number;
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
