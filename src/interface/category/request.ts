export interface ICategory {
  keyword: string;
  limit: string;
  filters: Filter[];
  sort: Sort[];
}

export interface Filter {
  key: string;
  value: string;
}

export interface Sort {
  prop: string;
  dir: string;
}
