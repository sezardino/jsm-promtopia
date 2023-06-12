import { PaginatedData, PaginationMeta } from "@/types";

export const getEntitiesResponse = <T>(
  data: T[],
  meta: PaginationMeta
): PaginatedData<T> => ({ data, meta });
