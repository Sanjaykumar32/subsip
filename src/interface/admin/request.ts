export interface ISubscribeByBussinessIDRequest {
  businessId: string;
}

export interface ISubscribeByAdminIdRequest {
  adminId: string;
}

export interface IAllBusinessSubscribersRequest {
  userId: number;
}

export interface IBussinessRequest {
  businessName?: string;
  businessId?: number;
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
  businessId: number;
  userId: string;
  referredCode: string;
}

export interface IDeleteSubscriberRequest {
  iSubscriberId: string;
}
