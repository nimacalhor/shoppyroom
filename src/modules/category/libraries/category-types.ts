import { Media } from "@modules/general/libraries/general-types";

export interface Category {
  // TEMPORARY category
  id: number;
  priority: number;
  title: string;
  description: string;
  link: string;
  media: Media;
}

export interface CategoryCriteria {
  // TEMPORARY category criteria
  limit?: number;
  keywords?: string[];
}

export interface CategoryListEntity {
  // TEMPORARY category entity
  status_code: number;
  totalResults: number;
  data: Category[];
}
