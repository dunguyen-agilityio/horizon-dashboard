export const QUERY = {
  PAGINATION_PAGE: (page: string) => `pagination[page]=${page}`,
  PAGINATION_PAGESIZE: (pageSize: string) => `pagination[pageSize]=${pageSize}`,
};

export const PAGE_SIZE = {
  SMALL: '6',
  MEDIUM: '8',
  HIGH: '10',
};
