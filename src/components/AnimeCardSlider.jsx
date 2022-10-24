import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSWR from 'swr'
import "swiper/css";
import AnimeCard from "./AnimeCard"
function AnimeCardSlider(props) {

  const { data, error } = useSWR('https://api.consumet.org/meta/anilist/popular')

  if (error) return <div>failed to load {console.log(error)}</div>
  if (!data) return <div></div>
  return (
    <div className="px-5">
      <h1 className="ml-3">{props.criteria}</h1>
      <div className="item-wrap m-auto flex flex-wrap ">
        <Swiper
          slidesPerView={6}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {data.results.map((item) =>
            <SwiperSlide>
              <AnimeCard
                id={item.id}
                img={item.image}
                tick_1st={item.type}
                tick_2nd="2013"
                title={item.title.userPreferred}
                label_1st={item.genres[0]}
                label_2nd={`${item.duration}m`}
                link=""
                link_title={`/info/${item.id}`}
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