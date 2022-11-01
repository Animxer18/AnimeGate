import AvatarImg from '../assests/avatar.webp'
import { Link, useNavigate } from "react-router-dom";
import { useState,useRef,useCallback } from "react";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function navigateFunction() {
      if (query !== "") {
        navigate("/search/" + query);
    
    }
    
  }

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const handleChange = (value) => {
    console.log(value);
  };

  const optimizedFn = useCallback(debounce(handleChange), []);


   
    
 

  return (
    <div><div className="nav h-[78px]   w-[calc(100vw_-_240px)] text-white bg-[#1a1a1d]">
     
    <div className="relative ml-[30px] top-[22px]  text-gray-600 ">
      <label onClick={() => navigateFunction()} >
        <input
          className="flex items-center w-[500px] border-2 border-gray-300 bg-white h-10 pl-9 pr-8 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          
          // minLength={2}
          onChange={(e) => {
            setQuery(e.target.value);
            optimizedFn(e.target.value)
            
          }}
         
          
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              navigateFunction();
            }
          }}
        />
      </label>
    </div>

    {/* <div className="absolute items-center right-6 top-[24px] flex ">
      <a href="#" className="block     ml-3  mt-4 fill-white lg:mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z" />
        </svg>
      </a>

      

      <img
        className="ml-3 rounded-full w-10 h-10 align-middle"
        src={AvatarImg}
        alt=""
      />

    </div> */}
  </div></div>
  )
}

export default Navbar