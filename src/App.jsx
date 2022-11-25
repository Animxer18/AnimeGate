import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWRConfig } from 'swr'
import "./global.css";

import SideNav from './components/SideNav'
import Home from './Pages/Home'

import Navbar from "./components/Navbar";
import Search from "./Pages/Search";


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
        <SideNav />
        <main_body className="body ml-[240px] text-white overflow-hidden bg-[#1a1a1d] w-[calc(100vw_-_240px)]">
        
          <Navbar />
          
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query" element={<Search />} />
            </Routes>
         

        </main_body>
      </div>
    </SWRConfig>
     </Router>
  );
}

export default App;
