var infoQueryForAnilist = `query ($id: Int) { # Define which variables will be used in the query (id)
    Media (idMal: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      coverImage {
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
     
    }
  }
  `
export { infoQueryForAnilist}