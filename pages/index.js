import AnimeCardSlider from "../src/components/AnimeCardSlider";
import Slider from '../src/components/Home/Slider'
import LatestAnimeSection from "../src/components/LatestAnimeSection";
import SliderSkeleton from "../src/components/skeletons/SliderSkeleton";
import AnimeCardSliderSkeleton from "../src/components/skeletons/AnimeCardSliderSkeleton";
const Home = () => {
  return (
    <>
    <Slider />
    <AnimeCardSlider criteria="Popular"/>
    <LatestAnimeSection subOrDub="sub" /> 
    {/* 1 = sub
  2= dub
  3 = chinese */}
    <LatestAnimeSection subOrDub="dub" /> 
    
    </>
  )
}

export default Home