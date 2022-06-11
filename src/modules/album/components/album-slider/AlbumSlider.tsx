import { Album } from "@modules/album/libraries/album-types";
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumSlideItem from "../album-slide-item";
import stl from "./AlbumSlider.module.scss";
import { Navigation } from "swiper";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css";

// TEMPORARY

const AlbumSlider = ({ albumList }: { albumList: Album[] }) => {
  return (
    <div className={stl.root}>
      {/* BUG swiper */}
      {/* <Swiper
        effect="fade"
        speed={2000}
        navigation={true}
        modules={[Navigation, EffectFade]}
        className="mySwiper"
      > */}
      <Swiper
        speed={1000}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {albumList.map((albm) => (
          <SwiperSlide key={albm.id}>
            <AlbumSlideItem album={albm} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlbumSlider;
