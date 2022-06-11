import { Media } from "@modules/general/libraries/general-types";
export interface Album {
  id: number;
  title: string;
  link: string;
  description: string;
  media: Media;
  link_title?: string;
}

export interface AlbumCriteria {
  // TEMPORARY AlbumCriteria
}

export interface AlbumListEntity {
  status_code: number;
  totalResults: number;
  data: Album[];
}
