import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSWR from 'swr'
import "swiper/css";
import AnimeCard from "./AnimeCard"
import AnimeCardSliderSkeleton from "./skeletons/AnimeCardSliderSkeleton";
function AnimeCardSlider(props) {

  const { data, error } = useSWR('/api/assets/s/popular.json')

  if (error) return <div>failed to load {console.log(error)}</div>
  if (!data) return <div><AnimeCardSliderSkeleton/> </div>
  return (
    <div className="px-5">
      <h1 className="mb-3 font-extrabold text-xl">{props.criteria}</h1>
      <div className="item-wrap m-auto flex flex-wrap ">
        <Swiper
          slidesPerView={6}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {data.result.map((item) =>
            <SwiperSlide>
              <AnimeCard
                id={item.url.slice(7)}
                img={item.picture}
                // tick_1st={item.type}
                // tick_2nd={item.releaseDate}
                title={item.title}
                // label_1st={item.genres[0]}
                // label_2nd={`${item.duration}`}
                link={`/info/${item.url.slice(7)}`}
                link_title={`/info/${item.url.slice(7)}`}
                usingInSlider={true}
              />
            </SwiperSlide>
          )}


        </Swiper>

      </div>
    </div>
  );
}


export default AnimeCardSlider;