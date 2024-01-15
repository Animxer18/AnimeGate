import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSWR from 'swr'
import "swiper/css";
import AnimeCard from "./AnimeCard"
import AnimeCardSliderSkeleton from "./skeletons/AnimeCardSliderSkeleton";
function AnimeCardSlider(props) {

  const { data, error } = useSWR('https://animexer1-api.vercel.app/meta/anilist/popular')

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
          {data.results.map((item) =>
            <SwiperSlide key={item.malId}>
              <AnimeCard
              
                id={item.malId}
                img={item.image}
                tick_1st={item.type}
                tick_2nd={item.releaseDate}
                title={item.title.userPreferred}
                // label_1st={item.genres[0]}
                // label_2nd={`${item.duration}`}
                link={`/info/${item.malId}`}
                link_title={`/info/${item.malId}`}
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
