import {useState,useEffect} from 'react'
import AnimeCard from './AnimeCard'
import useSWR from 'swr'
const LatestAnimeSection = (props) => {
  const { data, error } = useSWR(`https://api.consumet.org/anime/gogoanime/recent-episodes?type=${props.subOrDub}`)

  if (error) return <div>failed to load {console.log(error)}</div>
  if (!data) return <div></div>
  return (
    <div className="Latest p-5  ">
          <h1 className="ml-3">
            Latest Episodes ({props.subOrDub === "1" ? "Sub" : "Dub"})
          </h1>
            
          <div class="item-wrap m-auto flex flex-wrap   ">
          {data.results.map((item) => 
           <AnimeCard
                id={item.episodeId}
                img={item.image}
                tick_1st={props.subOrDub === "1" ? "Sub" : "Dub"}
                tick_2nd={`Episode ${item.episodeNumber}`}
                title={item.title}  
                link={`/watch/${item.episodeId}`}
                link_title={`/watch/${item.episodeId}`}
                usingInSlider={false}
              />
             
            )}
          </div>

        </div>
  )
}

export default LatestAnimeSection