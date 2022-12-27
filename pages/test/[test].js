
// import { useParams, Link } from "react-router-dom";
import {useRouter} from 'next/router'
import useSWR from 'swr'
const Test = () => {
    // let query = useParams().query;
    const router = useRouter()
    const {data ,error} =useSWR('/api/assets/mal/44511.json')
    const { test } = router.query
 
  return (
    <>
    {test}
     {console.log(data)}
    </>

  )
}

export default Test
