import { useState,useEffect } from 'react'
import Link from 'next/link'
import ReadMoreReact from 'read-more-react';
import useSWR from 'swr'
import {useRouter} from 'next/router'
import {request} from 'graphql-request'

function Info () {
  const [sub, setSub] = useState(true);
  const [watchInfo, setWatchInfo] = useState({})
  const [err,setErr] = useState(false)
  const router = useRouter()
  const { id } = router.query 
  
  const fetcher = query => request('https://graphql.anilist.co/', query,{id: id})
  // const { data, error } = useSWR(router.isReady ?`https://api.enime.moe/mapping/mal/3196${id}`: null
  // )

  const { data : animeInfoData, error :animeInfoError } = useSWR(router.isReady ?`query ($id: Int) { 
    Media (idMal: $id, type: ANIME) { 
      id
      coverImage {
        large
        medium
        color
      }
      bannerImage
      title {
        userPreferred
      } 
      format
      type
      description
      genres
      seasonYear
      status
      episodes
    
  }}`: null
    ,
    fetcher
  )

 const {data : epInfoData , error: epInfoError} = useSWR(router.isReady ? `/api/getEpInfo/${id}` : null)

   
  

 

  if (animeInfoError || epInfoError) return <div>failed to load {console.log(animeInfoError,epInfoError)}</div>
  if (!animeInfoData || !epInfoData ) return <div>Loading.... </div>
  // if (!epInfoData) return <div>Loading.... </div>
  return (
    <>
      <div className='mx-12 mb-8'>
        <div>
          <div className='h-80 w-100'>

          <img className='w-[100%] h-80 opacity-80 blue-[5px] rounded-md' src={animeInfoData.Media.bannerImage} alt="" />
          </div>
          <div className='px-4'>
            <div className='details px-[3rem] flex ' >
              <div className='poster m-4 flex flex-col'>
                <img className='w-[220px] h-[300px] mb-2 relative  rounded-md' src={animeInfoData.Media.coverImage.large} alt="" />
                <Link className="btn btn-primary mb-2" href={epInfoData.subId + "/ep/" + "1"}>Watch Sub</Link>
                {epInfoData.hasDub  ? <Link className="btn btn-outline btn-primary -top-[25%]" href={epInfoData.dubId  + "/ep/" + "1"}>Watch Dub</Link> : null}
                
              </div>
              <div className={`animedetails w-[56%] text-[#ad1844] `} style={{color: animeInfoData.Media.coverImage.color}}>
                <h1 className='text-3xl mb-2.5 mt-2 text-white'>{animeInfoData.Media.title.userPreferred}</h1>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Type: </span>{animeInfoData.Media.format}</p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Synopsis : </span>
                  <ReadMoreReact text={animeInfoData.Media.description}
                    min={100}
                    ideal={200}
                    max={400}
                    readMoreText="Read more" />
                    </p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Genre: </span>{animeInfoData.Media.genres.map((item) => item + ',')} </p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Released: </span>{animeInfoData.Media.seasonYear}</p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Status: </span>{animeInfoData.Media.status}</p>
                {animeInfoData.Media.episodes ==  null ? "" : <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Number of Episodes: </span>{animeInfoData.Media.episodes}</p>}
                
              </div>
            </div>
            
            <div className='episodes mx-8 py-8 px-14 outline-1 outline outline-[#7c356d] rounded-sm text-white shadow-md shadow-[#2b2d36]' >
              <div className='Episode_And_toggle flex gap-4 items-center mb-4'>
                <h2 className='text-2xl font-bold'>Episodes</h2>
                {epInfoData.hasDub ? ( <div className="flex items-center">

<input
  type="checkbox"
  className="toggle toggle-primary toggle-lg"
  checked={!sub}
  readOnly
  onClick={() => {
    setSub(!sub);
  }}
/>

  <h1 className='ml-2 text-xl'>{sub == true ? "Sub" : "Dub"}</h1>
</div>) : null}
               
              </div>
             

              <div className='episodeList grid grid-cols-autofit gap-4'>
                {/* console.log(watchInfo[0]) */}
            {sub ? Array.from(Array(epInfoData.numOfSubEp), (e, i) => {
                  let EpNum = i +1
    return <Link key={epInfoData.subId+"/ep/"+ EpNum} className="btn btn-outline btn-primary" href={epInfoData.subId+"/ep/"+ EpNum}>
    Episode {i + 1}
  </Link>
  }) : Array.from(Array(epInfoData.numOfDubEp), (e, i) => {
    let EpNum = i +1
return <Link  key={epInfoData.dubId+"/ep/"+ EpNum} className="btn btn-outline btn-primary" href={epInfoData.dubId+"/ep/"+ EpNum}>
Episode {i + 1}
</Link>
})}
             
                

              </div>
            </div>
            {/* {console.log("This is the watchInfo Sbb" + watchInfo[0].ep)} */}
          </div>
        </div>
      </div>
    </>



    // <>
    
    // {console.log(info)}
    // </>
  )
}

export default Info