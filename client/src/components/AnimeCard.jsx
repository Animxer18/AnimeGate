import React from 'react'

const AnimeCard = (props) => {
    // w-[calc(15%_-_14px)]
    
    return (
        <div data-id={props.id} className='item' >
            <div class="item-poster group hover:after:opacity-90 group pb-[130%] relative">
                {props.tick_1st ?  (<div class="tick z-10 absolute bottom-2 left-[10px] ltr">
                    <div class="tick-item1 bg-[#ffffff] text-black text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">{props.tick_1st}</div>
                </div>) : null}
               
                {props.tick_2nd ? (<div class="tick z-10 absolute bottom-2 right-[10px]  rtl">
                    <div class="tick-item2 bg-[#C3073F] text-white text-[12px] font-bold leading-5 py-[2px] px-[4px] rounded">{props.tick_2nd}</div>
                </div>) : null}
                
                <img class=" anime-poster-img absolute  w-[100%] h-[100%] left-0 top-0 right-0 bottom-0" src={props.img}  />
                <a class="anime-poster-ahref z-10  group-hover:block hidden absolute w-[100%] h-[100%] left-0 top-0 right-0 bottom-0 " href={props.link} ><i className=" fas  fa-2x fa-play"></i></a>
            </div>
            <div class="anime-detail bg-[#25262d] text-[12px] p-[10px] ">
                <h3 class="anime-name text-[14px] mb-[8px] h-[37px] font-[500]">
                    <a href={props.link_title}  >{props.title}</a>
                </h3>
                {props.label_1st ? (<div class="fd-infor">
                    <span class="fdi-item">{props.label_1st}</span>
                    {props.label_2nd ? (<><span class="dot w-[6px] h-[6px] bg-white rounded-full my-[1px] mx-[6px] inline-block "></span>
                    <span class="fdi-item">{props.label_2nd}</span> </>) : null }
                    
                </div>) : null}
                
            </div>
        </div>
    )
}


export default AnimeCard