import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReadMoreReact from 'read-more-react';
import useSwr from 'swr'
const AnimeDetails = () => {
  const [sub, setSub] = useState(true);
  const {data ,error} =useSwr('https://animixplay.to/assets/mal/44511.json')
useEffect(() => {
console.log(sub)
  
}, [sub])
  
  return (
    <>
      <div className='mx-12 mb-8'>
        <div>
          <div className='h-80 w-100'>

          <img className='w-[100%] h-80 opacity-80 blue-[5px] rounded-md' src="https://cdn.discordapp.com/attachments/1012022888964046910/1048899926475689994/wallpaperflare-cropped.jpg" alt="" />
          </div>
          <div className='px-4'>
            <div className='details px-[3rem] flex ' >
              <div className='poster m-4 flex flex-col'>
                <img className='w-[220px] h-[300px] mb-8 relative -top-[20%] rounded-md' src="https://gogocdn.net/cover/boku-no-hero-academia.jpg" alt="" />
                <a className="text-[1.3rem] px-[3.4rem] py-[1rem] text-center text-white bg-[#950740] rounded-lg relative -top-[25%]" href="/watch/boku-no-hero-academia-episode-1">Watch Now</a>
              </div>
              <div className='animedetails w-[56%] text-[#ad1844] '>
                <h1 className='text-3xl mb-2.5 mt-2 text-white'{data.title}</h1>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Type: </span>{data.type}</p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Synopsis : </span>
                  <ReadMoreReact text={data.synopsis}
                    min={100}
                    ideal={200}
                    max={400}
                    readMoreText="Read more" /></p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Genre: </span>Action, Comedy, School, Shounen, Super Power</p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Released: </span>2016</p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Status: </span>Completed</p>
                <p className='text-lg mb-2.5  text-justify'><span className='text-white'>Number of Episodes: </span>13</p>
              </div>
            </div>
            <div className='episodes mx-8 py-8 px-14 outline-1 outline outline-[#7c356d] rounded-sm text-white shadow-2xl shadow-[#2b2d36]' >
              <div className='Episode_And_toggle flex gap-4 items-center mb-2'>
                <h2 className='text-2xl font-bold'>Episodes</h2>

                <div className="flex items-center">

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
                </div>
              </div>
              <div className='episodeList grid grid-cols-autofit gap-4'>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                <Link className="btn btn-primary" to="/bnha-episode-1">
                  Episode 1
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimeDetails