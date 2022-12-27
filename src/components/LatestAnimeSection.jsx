import { useState, useEffect } from 'react'
import AnimeCard from './AnimeCard'

import useSWR from 'swr'
import CardSkeleton from './skeletons/CardSkeleton'
import extractUrls from 'extract-urls'

const LatestAnimeSection = (props) => {

  

  // const { data, error } = useSWR('https://api.consumet.org/meta/anilist/trending',{ refreshInterval: 18000 })
  const { data, error } = useSWR(props.subOrDub === "sub" ? "https://api.consumet.org/anime/gogoanime/recent-episodes?type=1" : "https://api.consumet.org/anime/gogoanime/recent-episodes?type=2" )
  // const { data, error } = useSWR(`/api/rss${props.subOrDub}.xml`,fetcherWithResInText


      

      


 


  if (error) return <div>failed to load {console.log(error)}</div>
  if (!data) return <div className="Latest p-5  ">
    <h1 className="mb-3 font-extrabold text-xl">
      Latest Episodes ({props.subOrDub === "1" ? "Sub" : "Dub"})
    </h1>

    <div className=" m-auto grid grid-cols-6 gap-2   ">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>

  </div>


  return (
    <div className="Latest p-5  ">
      <h1 className="mb-3 font-extrabold text-xl">
        Latest Episodes ({props.subOrDub === "sub" ? "Sub" : "Dub"})
      </h1>

      <div className=" m-auto grid grid-cols-6 gap-2   ">
        {data.results.map((item) =>
          <AnimeCard
            key={item.id}
            id={item.id}
            img={item.image}
            tick_1st={props.subOrDub === "1" ? "Sub" : "Dub"}
            tick_2nd={item.episodeNumber}
            title={item.title}
            link={"/watch"+ item.episodeId}
            link_title={`/info/${item.id}`}
          // usingInSlider={true}
          />

        )}
        {/* { jsonData.rss.channel[0].item.map((item) => 
           <AnimeCard
           key={item.guid[0].slice(25).replace("/ep", "-episode-")}
                id={item.guid[0].slice(25).replace("/ep", "-episode-")}
                img={extractUrls(item.description[0])[1]}
                tick_1st={props.subOrDub === "1" ? "Sub" : "Dub"}
                tick_2nd={item.ep[0]}
                title={item.title[0]}  
                link={`/watch/${item.guid[0].slice(25).replace("/ep", "-episode-")}`}
                link_title={`/info/${item.idmal[0]}`}
                // usingInSlider={true}
              />
             
            ) } */}

      </div>

    </div>


    // .subString(25).replace("/ep", "-episode-")

  )
}

export default LatestAnimeSection