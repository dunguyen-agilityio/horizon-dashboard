export type StrapiResponse<T> = {
  id: string;
  attributes: Omit<T, 'id'>;
};

export type StrapiModel<T> = {
  data: T;
};

export type StrapiModelWithPagination<T> = StrapiModel<T> & {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
