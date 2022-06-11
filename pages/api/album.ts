import * as fs from "fs";
import path from "path";
import {
  AlbumCriteria,
  Album,
  AlbumListEntity,
} from "@modules/album/libraries/album-types";

const filePath = path.join(process.cwd(), "data/dev-data/albums.json");

export const getAlbumList = function (
  criteria: AlbumCriteria
): Promise<AlbumListEntity> {
  const albumList: Album[] = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf8" })
  );
  const response: AlbumListEntity = {
    status_code: 200,
    totalResults: albumList.length,
    data: albumList,
  };
  return new Promise((resolve) => resolve(response));
};
