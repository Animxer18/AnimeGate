import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWRConfig } from 'swr'
import "./global.css";
import 'flowbite';

import SideNav from './components/SideNav'
import Home from './Pages/Home'

import Navbar from "./components/Navbar";
import Search from "./Pages/Search";
// import AnimeDetails from "./Pages/AnimeDetails";


function App() {
  useEffect(() => {
    document.title = "Anime Gate";
  }, []);



  return (
    <Router>
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >


      <div className="flex">
        {/* <SideNav /> */}
        <main_body className="body relative text-white overflow-y-visible overflow-x-hidden bg-[#1a1a1d] ">
        
          <Navbar />
          
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query" element={<Search />} />
              {/* <Route path="/info/:id" element={<AnimeDetails />} /> */}
            </Routes>
         

        </main_body>
      </div>
    </SWRConfig>
     </Router>
  );
}

export default App;
