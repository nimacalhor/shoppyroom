import { AlbumListEntity } from "@modules/album/libraries/album-types";
import { getAlbumList } from "@pages/api/album";

export const fetchAlbumList = async function (): Promise<AlbumListEntity> {
  return getAlbumList({});
};
