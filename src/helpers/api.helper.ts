import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

import { StorageUtil } from "helpers";
import { LocalStorageEnum } from "enum";

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
   * @param {string} fileName
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async send<T>(
    config: AxiosRequestConfig,
    fileName?: string
  ): Promise<AxiosResponse<T>> {
    const res = await axios({ ...config, withCredentials: true });
    if (config.headers?.isCsv != null && config.headers?.isCsv) {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      // or any other extension
      link.setAttribute("download", fileName || "report.csv");
      document.body.appendChild(link);
      link.click();
    }

    return res;
  }

  /** Manage Request */
  public static initRequestManager() {
    axios.interceptors.request.use(
      (config) => {
        let newConfig = config;
        const accessToken = StorageUtil.getSessionSotrage(
          LocalStorageEnum.TOKEN
        );

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

  // TODO DR - 29/08/2022 - Payment response is any type of data that's why used any
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * API for make payment
   * @param {string} url
   * @param {object} data
   * @return {Promise<any>}
   */
  public static async fetchPostJSON(url: string, data?: object): Promise<any> {
    try {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    } catch (error: unknown) {
      return error;
    }
  }
}
