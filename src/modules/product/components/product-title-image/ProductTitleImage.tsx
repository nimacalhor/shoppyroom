import { Product } from "@modules/product/libraries/product-types";
import { Brand } from "@modules/brand/libraries/brand-types";
import stl from "./ProductTitleImage.module.scss";
import Image from "next/image";

const PanelImage = ({ entity }: { entity: Product | Brand }) => {
  return (
    <div className={stl.root}>
      <div className={stl.root__container}>
        <Image
          alt={entity.title}
          src={entity.media.path}
          layout="raw"
          height={entity.media.height}
          width={entity.media.width}
        />
      </div>
    </div>
  );
};

export default PanelImage;
