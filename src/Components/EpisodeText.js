import axios from 'axios'
import React, { useEffect, useState } from 'react'



const EpisodeText = ({api}) => {

  const [episodes, setEpisodes] = useState([])


  useEffect(() => {
    Promise.all(
      api.map((episodeURL) =>
        axios.get(episodeURL).then((response) => response.data)
      )
    )
      .then((episodeData) => {
        setEpisodes(episodeData);
      })
      .catch((error) => {
        console.error('Error fetching episodes:', error);
      });
  }, [api]);
    
  return (
    <>
   
    <ul style={{'padding':'1rem'}}>
    {episodes.map((episode) => (
      <li key={episode.id}>{episode.name}</li>
    ))}
  </ul>
  </>


   
  )
}

export default EpisodeText
