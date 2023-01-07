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
  userId: number;
}

export interface INotificationRequest {
  userId: string;
}

export interface IRefferralCodeRequest {
  userId: string;
}

export interface IAddSubscriberTobussinessRequest {
  businessId: string;
  userId: string;
}
