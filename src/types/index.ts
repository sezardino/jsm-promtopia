export * from "./entity";
export * from "./input";

export interface PaginationMeta {
  totalPages: number;
  page: number;
  limit: number;
  count: number;
}

export interface PaginatedData<T> {
  data: T[];
  meta: PaginationMeta;
}
