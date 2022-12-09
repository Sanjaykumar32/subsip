export interface ICredentials {
  email: string;
  password: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
  referredCode: string;
}

export interface IForgetPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  token: string;
  otp: string;
  password: string;
}
