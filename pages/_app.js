import '../styles/globals.css'
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SWRConfig } from 'swr'
import SideNav from '../src/components/SideNav'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Head from 'next/head'
import Navbar from "../src/components/Navbar";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Anime Gate";
  }, []);
  return <>
  <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >

<Head>
  <title>Anime Gate</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            
</Head>
      <div className="flex">
        {/* <SideNav /> */}
        <main_body className="body relative text-white overflow-y-visible overflow-x-hidden bg-[#1a1a1d] ">
        
          <Navbar />
          
          
          <Component {...pageProps} />
         

        </main_body>
      </div>
    </SWRConfig>
  
  </>
  
}

export default MyApp
