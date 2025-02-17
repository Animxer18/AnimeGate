
// import { useParams, Link } from "react-router-dom";
import {useRouter} from 'next/router'
import useSWR from 'swr'
import AnimeCard from "../../src/components/AnimeCard";
const Search = () => {
    // let query = useParams().query;
    const router = useRouter()
    const { query } = router.query
    const { data, error } = useSWR(`https://animexer1-api.vercel.app/anime/gogoanime/${query}`)
  
  if (error) return <div>failed to load {console.log(error)}</div>
  if (!data) return <div></div>
  return (
    <>
    
      <div className="Search p-5 min-h-screen ">
    <div className="flex mb-4">
        Search Results for &nbsp;  <h1 className="font-extrabold text-yellow-800">    {   query}</h1> 
    </div>
            
          <div className=" m-auto grid grid-cols-6 gap-4   ">
          {data.results.map((item) => 
           <AnimeCard
           key={item.id}
                id={item.id}
                img={item.image}
                tick_1st={item.subOrDub === "sub" ? null : "Dub"}
                title={item.title}  
                link={`/watch/${item.id}`}
                link_title={`/watch/${item.id}`}
                label_1st={item.releaseDate}
              />
             
            )}
          </div>

        </div>
    </>

  )
}

export default Search
