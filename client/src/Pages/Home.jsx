import AnimeCardSlider from "../components/AnimeCardSlider";
import Slider from '../components/Home/Slider'
import LatestAnimeSection from "../components/LatestAnimeSection";
import SliderSkeleton from "../components/skeletons/SliderSkeleton";
import AnimeCardSliderSkeleton from "../components/skeletons/AnimeCardSliderSkeleton";
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