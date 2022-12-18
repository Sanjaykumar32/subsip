export interface ISubscribeByBussinessIDRequest {
  businessId: string;
}

export interface ISubscribeByAdminIdRequest {
  adminId: string;
}

export interface IAllBusinessSubscribersRequest {
  userId: string;
}

export interface IBussinessRequest {
  businessName?: string;
  businessId?: string;
}

export interface IRefferralCountRequest {
  userId: string;
}

export interface IRefferralCodeRequest {
  userId: string;
}
