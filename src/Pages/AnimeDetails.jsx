import React from 'react'

const AnimeDetails = () => {
  return (
    <>
    <div className='mx-4'>
        <div>
            <img className='w-100 h-80 object-cover rounded-md' src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg" alt="" />
            <div className='details px-[3rem] flex ' >
                <div className='poster flex flex-col'>
                    <img className='w-[220px] h-[300px] mb-8 relative top-[20%]' src="https://gogocdn.net/cover/boku-no-hero-academia.jpg" alt=""/>
                    <a className="" href="/watch/boku-no-hero-academia-episode-1">Watch Now</a>
                </div>
                <div className='animedetails'></div>
            </div>
            <div className='episodes ' ></div>
        </div>
    </div>
    </>
  )
}

export default AnimeDetails