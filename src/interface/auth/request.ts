export interface ICredentials {
  email: string;
  password: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
  referralCode?: string;
}

export interface IForgetPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  token: string;
  otp: string;
  password: string;
}

export interface IOTpRequest {
  email: string;
}

export interface ISendOTpRequest {
  otp: string;
}
