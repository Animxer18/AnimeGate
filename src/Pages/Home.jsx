import AnimeCardSlider from "../components/AnimeCardSlider";
import Slider from '../components/Home/Slider'
import LatestAnimeSection from "../components/LatestAnimeSection";
const Home = () => {
  return (
    <>
    <Slider />
    <AnimeCardSlider criteria="Popular"/>
    <LatestAnimeSection subOrDub="1" /> 
    {/* 1 = sub
  2= dub
  3 = chinese */}
    <LatestAnimeSection subOrDub="2" /> 
    </>
  )
}

export default Home