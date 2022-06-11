import { Media } from "../../general/libraries/general-types";
export interface Brand {
  id: number;
  title: string;
  url: string;
  media: Media;
}
export interface BrandListEntity {
  status_code: number;
  totalResults: number;
  data: Brand[];
}
