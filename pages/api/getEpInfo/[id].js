import cheerio from 'cheerio';



 const scrapeAnimeDetails = async(id ) => {
  try {
      

      let response = await fetch(`https://gogoanime.tel/category/${id}`);
    let res= await response.text()
      const $ = cheerio.load(res);




      let ep_end = $('#episode_page > li').last().find('a').attr('ep_end');
      ep_end = parseInt(ep_end)
  

      

      return ep_end
      ;
  } catch (err) {
      console.log(err);
      return { error: err };
  }
};

const fetchSlug = async function (id){
    let response = await fetch(`https://raw.githubusercontent.com/MALSync/MAL-Sync-Backup/master/data/myanimelist/anime/${id}.json`);
    let data = await response.json()
     
     let slug = {}
     slug.subId = Object.keys(data.Pages.Gogoanime)[0]
     slug.dubId =Object.keys(data.Pages.Gogoanime)[1]
    return (slug)
  
}

export default async  function handler (req, res)  {
  const {id} = req.query
  const slugs = await fetchSlug(id)
  const subId = slugs.subId
  const dubId = slugs.dubId
  

  const episodeInfo = {}
  episodeInfo.subId =subId
  episodeInfo.dubId =dubId
  
    episodeInfo.numOfSubEp = await scrapeAnimeDetails(subId)
    if(dubId == undefined){
      episodeInfo.hasDub = false
    }
    else{
      episodeInfo.hasDub = true
    }

    

    if(episodeInfo.hasDub){
      episodeInfo.numOfDubEp = await scrapeAnimeDetails(episodeInfo.dubId)
    }


  res.setHeader('Cache-Control', 's-maxage=86400');
  res.send(episodeInfo)
};
