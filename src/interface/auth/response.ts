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
