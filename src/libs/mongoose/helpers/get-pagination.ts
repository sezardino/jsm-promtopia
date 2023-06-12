export const getPagination = (page = 0, limit = 10, totalCount: number) => {
  const totalPages = Math.ceil(totalCount / limit);

  return {
    skip: page * limit,
    limit,
    meta: {
      totalPages: totalPages,
      page: page + 1,
      limit,
      count: totalCount,
    },
  };
};
