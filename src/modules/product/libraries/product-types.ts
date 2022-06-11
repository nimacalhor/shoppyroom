import { Category } from "@modules/category/libraries/category-types";
import { Brand } from "@modules/brand/libraries/brand-types";
import {
  Media,
  BreadCrumb,
  Sorting,
  Paging,
} from "@modules/general/libraries/general-types";
import { ProductActionTypes } from "../store/constants/product-action-types";
export interface Product {
  id: number;
  title: string;
  price: number;
  brand_id: number;
  brand: Brand;
  deliverable: boolean;
  is_new: boolean;
  tag_list?: string[] | null;
  visit_count: number;
  short_description: string;
  description: string;
  media: Media;
  rate: number;
  like_count: number;
  category_list?: Category[] | null;
  category: Category;
}

export interface ProductCriteria {
  limit: number;
  paging?: number;
  brandIds?: string[];
  categoryIds?: string[];
  sorting?: Sorting;
  searchKeywords?: string;
}

export interface ProductListEntity {
  data: Product[];
  paging: Paging;
  sorting?: Sorting;
  status_code: string;
  message: string;
  error: Error | null;
  criteria: ProductCriteria;
}
export interface ProductDetailEntity {
  data: Product | null;
  status_code: string;
  url?: string;
  error: Error | null;
  id: number;
}

export interface ProductState {
  list: ProductStateList;
}
export interface ProductStateListItem {
  items: Product[];
  criteria: ProductCriteria;
  pending: boolean;
  error: Error | null;
}
export interface ProductStateList {
  [key: string]: ProductStateListItem;
}

// list actions ______________________________
export interface GetProductListAction {
  type: ProductActionTypes.GET_PRODUCT_LIST;
  payload: GetProductListActionPayload;
}
export interface GetProductListActionPayload {
  criteria: ProductCriteria;
}

export interface PendingProductListAction {
  type: ProductActionTypes.PUT_PENDING_PRODUCT_LIST;
  payload: PendingProductListActionPayload;
}
export interface PendingProductListActionPayload {
  criteria: ProductCriteria;
  pending: boolean;
}

export interface ErrorProductListAction {
  type: ProductActionTypes.PUT_ERROR_PRODUCT_LIST;
  payload: ErrorProductListActionPayload;
}
export interface ErrorProductListActionPayload {
  criteria: ProductCriteria;
  error: Error | null;
}

export interface PutProductListAction {
  type: ProductActionTypes.PUT_PRODUCT_LIST;
  payload: PutProductListActionPayload;
}
export interface PutProductListActionPayload {
  criteria: ProductCriteria;
  productListEntity: ProductListEntity;
}
