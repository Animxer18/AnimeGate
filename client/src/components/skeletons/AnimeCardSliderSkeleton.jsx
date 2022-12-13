import React from 'react'
import CardSkeleton from './CardSkeleton'

const AnimeCardSliderSkeleton = (props) => {
  return (
    <div className="px-5">
      <h1 className="mb-3 font-extrabold text-xl">{props.criteria }</h1>
      <div className="m-auto grid grid-cols-6 gap-2 ">
        
          
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>

        

      </div>
    </div>
  )
}

export default AnimeCardSliderSkeleton