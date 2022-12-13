import {useState,useEffect} from 'react'
import AnimeCard from './AnimeCard'
// import { XMLParser  } from 'fast-xml-parser';

import useSWR from 'swr'
import CardSkeleton from './skeletons/CardSkeleton'
import extractUrls from 'extract-urls'
const LatestAnimeSection = (props) => {
  let parser = new DOMParser();
  const fetcherWithResInText = (...args) => fetch(...args).then(res => res.text().then( res => 
   res = parser.parseFromString(res,'text/xml')))
  // const { data, error } = useSWR(`https://api.consumet.org/anime/gogoanime/recent-episodes?type=${props.subOrDub}`)
  const { data, error } = useSWR(`/api/rss${props.subOrDub}.xml`,fetcherWithResInText)
  
  // useEffect(() => {
  //   function Purify(text) {
  //     var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  //     return text.replace(urlRegex, function (url) {
  //         return '<a class="text-blurple" target="_blank" href="' + url + '">' + url + '</a>';
  //     })
  // }
  // Purify(`<a href="https://animixplay.to/v1/tunshi-xingkong-2nd-season/ep39"><img src="https://cdn.animixplay.to/i/dc3c595166332a6986427b41b9fc7f26.jpg"></a> ]]>`)
  // }, [data])
useEffect(() => {
  fetch("/cdn", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "Referer": "https://animixplay.to/",
      "Referrer-Policy": "origin"
    },
    "body": "qfast=my+he",
    "method": "POST"
  }).then(resp => resp.json())
  .then(json => {
  console.log(json)
  })
  .catch(err => console.log(err));
},[])
  if (error) return <div>failed to load {console.log(error)}</div>
  if (!data) return <div className="Latest p-5  ">
  <h1 className="mb-3 font-extrabold text-xl">
    Latest Episodes ({props.subOrDub === "1" ? "Sub" : "Dub"})
  </h1>
    
  <div class=" m-auto grid grid-cols-6 gap-2   ">
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  </div>

</div>


  return (
    <div className="Latest p-5  ">
          <h1 className="mb-3 font-extrabold text-xl">
            Latest Episodes ({props.subOrDub === "1" ? "Sub" : "Dub"})
          </h1>
            
          <div class=" m-auto grid grid-cols-6 gap-2   ">
            {console.log(data.getElementsByTagName("item")[0].getElementsByTagName("description")[0].textContent)}
          {
       Array.from(data.getElementsByTagName("item")).map((item) => 
           <AnimeCard
                id={item.getElementsByTagName("guid")[0].textContent.slice(25).replace("/ep", "-episode-")}
                img={extractUrls(item.getElementsByTagName("description")[0].textContent)[1]}
                tick_1st={props.subOrDub === "1" ? "Sub" : "Dub"}
                tick_2nd={item.getElementsByTagName("ep")[0].textContent}
                title={item.getElementsByTagName("title")[0].textContent}  
                link={`/watch/${item.getElementsByTagName("guid")[0].textContent.slice(25).replace("/ep", "-episode-")}`}
                link_title={`/info/${item.getElementsByTagName("idmal")[0].textContent}`}
                // usingInSlider={true}
              />
             
            )}
          </div>

        </div>




  )
}

export default LatestAnimeSection