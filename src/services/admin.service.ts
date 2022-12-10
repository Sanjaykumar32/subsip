import { AxiosResponse } from "axios";

import { ApiHelper } from "helpers";
import {
  ISubscribeByAdminIdRequest,
  ISubscribeByBussinessIDRequest,
  ISubscribeByBussinessIDResponse,
} from "interface";

/**
 * Admin Service
 */
export class AdminService {
  /**
   * Subscribe By businessId
   * @param {ISubscribeByBussinessIDRequest} payload
   * @return {Promise<ISubscribeByBussinessIDResponse>}
   */
  public static async subscribeByBuissnessID(
    payload: ISubscribeByBussinessIDRequest
  ): Promise<ISubscribeByBussinessIDResponse> {
    const res: AxiosResponse<ISubscribeByBussinessIDResponse> =
      await ApiHelper.send<ISubscribeByBussinessIDResponse>({
        url: `/subscribers?businessId=${payload.businessId}`,
        method: "GET",
      });

    return res.data;
  }

  /**
   * Subscribe By adminId
   * @param {ISubscribeByAdminIdRequest} payload
   * @return {Promise<ISubscribeByBussinessIDResponse>}
   */
  public static async subscribeByAdminId(
    payload: ISubscribeByAdminIdRequest
  ): Promise<ISubscribeByBussinessIDResponse> {
    const res: AxiosResponse<ISubscribeByBussinessIDResponse> =
      await ApiHelper.send<ISubscribeByBussinessIDResponse>({
        url: `/subscribers?adminId=${payload.adminId}`,
        method: "GET",
      });

    return res.data;
  }
}
