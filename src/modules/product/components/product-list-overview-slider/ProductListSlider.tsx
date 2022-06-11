import SectionHeading from "@modules/general/components/section-heading";
import ProductSimpleCard from "../product-simple-card/ProductSimpleCard";
import { DeviceType } from "@modules/general/libraries/device-type";
import { Product } from "@modules/product/libraries/product-types";
import { URLS } from "@modules/general/libraries/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import stl from "./ProductListSlider.module.scss";
import { Navigation } from "swiper";

const ProductListSlider = ({
  productList,
  deviceType,
  title,
  href,
}: {
  productList: Product[];
  deviceType: DeviceType;
  title: string;
  href: string;
}) => {
  return (
    <>
      <br />
      <br />
      <SectionHeading title={title} href={href} />
      <Swiper
        className={stl.root}
        slidesPerView={deviceType.isMobile ? 1 : deviceType.isTablet ? 3 : 5}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation]}
      >
        {productList.map((prd) => (
          <SwiperSlide key={prd.id}>
            <ProductSimpleCard product={prd} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductListSlider;
