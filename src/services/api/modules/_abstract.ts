export abstract class AbstractApiModule {
  protected async fetcher<Response>(
    url: string,
    options?: any
  ): Promise<Response> {
    return fetch(url, options).then((res) => res.json());
  }
}
