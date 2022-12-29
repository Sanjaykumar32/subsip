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
        const accessToken = localStorage.getItem("token");
        config = {
          ...config,
          headers: {
            ...config.headers,
            ["x-access-token"]: accessToken,
          },
        };
        // Do something before request is sent
        return config;
      },
      (error) => Promise.resolve(error)
    );
  }

  public static init() {
    axios.defaults.baseURL = "http://159.223.194.50:8000";
    ApiHelper.initRequestManager();
  }
}

ApiHelper.init();
