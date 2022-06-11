import { Media } from "@modules/general/libraries/general-types";
import stl from "./MainImage.module.scss";
import Image from "next/image";

const MainImage = ({ media }: { media: Media }) => {
  return (
    <div className={`${stl.root} panel`}>
      <div className={stl.root__imgCnt}>
        <Image
          layout="fill"
          objectFit="cover"
          height={media.height}
          width={media.width}
          src={media.path}
          alt={media.description}
        />
      </div>
    </div>
  );
};

export default MainImage;
