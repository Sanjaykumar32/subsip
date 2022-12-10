import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

type Method =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";

export interface IRequestObject {
  url: string;
  method: Method;
  data?: object;
  headers?: object;
}

axios.defaults.headers.common.timezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone;
axios.defaults.headers.common["Cache-Control"] = "no-cache";

/** Api Helper Class */
export class ApiHelper {
  /**
   * To make generic  api call ie. post get etc.
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async send<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const res = await axios(config);
    return res;
  }

  /** Manage Request */
  public static initRequestManager() {
    axios.interceptors.request.use(
      (config) => {
        let newConfig = config;
        const accessToken = sessionStorage.getItem("token");
        if (navigator.cookieEnabled) {
          newConfig = { withCredentials: true, ...newConfig };
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          newConfig.headers.common.Authorization = `Bearer ${accessToken}`;
        }

        // Do something before request is sent
        return newConfig;
      },
      (error) => Promise.resolve(error)
    );
  }
}

ApiHelper.initRequestManager();
