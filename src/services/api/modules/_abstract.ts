import axios, { AxiosRequestConfig } from "axios";

export abstract class AbstractApiModule {
  protected async fetcher<Response>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<Response> {
    return axios(url, options).then((res) => res.data);
  }
}
