import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWRConfig } from 'swr'
import "./global.css";
import AnimeCardSlider from "./components/AnimeCardSlider";
import SideNav from './components/SideNav'
import Slider from './components/Home/Slider'
import LatestAnimeSection from "./components/LatestAnimeSection";
import Navbar from "./components/Navbar";


function App() {
  useEffect(() => {
    document.title = "Anime Gate";
  }, []);



  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >


      <div className="flex">
        <SideNav />
        <main_body className="body ml-[240px] text-white overflow-hidden bg-[#1a1a1d] w-[calc(100vw_-_240px)]">
          <Navbar />
          <Slider />
          <AnimeCardSlider criteria="Popular"/>
          <LatestAnimeSection subOrDub="1" /> 
          {/* 1 = sub
        2= dub
        3 = chinese */}
          <LatestAnimeSection subOrDub="2" /> 
          {/* <Router>
       <Routes>
        <Route path="/" element={<Home />} />
     </Routes>
    </Router> */}

        </main_body>
      </div>
    </SWRConfig>
  );
}

export default App;
