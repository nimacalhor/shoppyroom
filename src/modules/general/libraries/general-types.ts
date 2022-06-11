export interface Media {
  title: string;
  path: string;
  link?: string;
  width: number;
  height: number;
  description?: string;
}

export interface BreadCrumb {
  id: number;
  title: string;
}
export enum SORTING_TYPES {
  cheapest = "cheapest",
  expensive = "expensive",
  none = "none",
  new = "new",
  likeCount = "like_count",
  promotion = "promotion",
}
export interface Sorting {
  expression: SORTING_TYPES;
  ascending: boolean;
}
export interface Paging {
  limit: number;
  total: number;
  page: number;
  returned: number;
  has_more: boolean;
}
