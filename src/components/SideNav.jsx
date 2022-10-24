import React from 'react'

const SideNav = () => {
  return (
    <div>
    <div className="sidenav flex flex-col w-[240px] h-[100%] fixed bg-[#25262d] text-white">
    <div className="logo my-2 mt-16 mx-auto w-14">
      <img src="./AnimeGate logo.jpg" alt="logo" />
    </div>
    <hr className="w-24 mx-auto" />
    <div className="menu flex flex-col  my-4 ">
      {/* <h1  className='inline ml-6 font-bold '>Menu</h1> */}

      <button className="btn   px-4 py-3 hover:bg-[#4e4e50] group  text-left my-2 mx-1 rounded-md mr-3   ">
        <div className="flex">
          <svg
            className="group-hover:fill-[#C3073F] fill-white  mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="M5 20V9.5l7-5.275L19 9.5V20h-5.15v-6.425h-3.7V20Z" />
          </svg>
          <h2 className="group-hover:text-[#C3073F] text-white"> Home</h2>
        </div>
      </button>
      <button className="btn  px-4 py-3 hover:bg-[#4e4e50] group  text-left my-2 mx-1 rounded-md mr-3   ">
        <div className="flex  ">
          <svg
            className="group-hover:fill-[#C3073F] fill-white  mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="m7.15 16.85 6.3-3.4 3.4-6.3-6.3 3.4ZM12 13q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 8q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.925Q10.125 3 12 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Z" />
          </svg>
          <h2 className="group-hover:text-[#C3073F] text-white">
            
            Explore
          </h2>
        </div>
      </button>
      <button className="btn  px-4 py-3 hover:bg-[#4e4e50] group  text-left my-2 mx-1 rounded-md mr-3   ">
        <div className="flex  ">
          <svg
            className="group-hover:fill-[#C3073F] fill-white  mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="m4.625 5 1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h2l1.5 3h3l-1.5-3h1.75q.7 0 1.163.463.462.462.462 1.162v10.75q0 .7-.462 1.163-.463.462-1.163.462H4.625q-.7 0-1.162-.462Q3 18.075 3 17.375V6.625q0-.7.463-1.162Q3.925 5 4.625 5Z" />
          </svg>
          <h2 className="group-hover:text-[#C3073F] text-white"> Anime</h2>
        </div>
      </button>
    </div>
  </div></div>
  )
}

export default SideNav