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
