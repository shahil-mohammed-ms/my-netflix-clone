import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'



function RowPost(props) {
  const [ActionMovie, setActionMovie] = useState([])
  const [MovieId, setMovieId] = useState('')
 
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setActionMovie(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  
const handleMovie=(id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  setMovieId(response.data.results[0].key)
  

})
}
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
    
        autoplay: 1,
      },}


  return (
    
    <div className='row'>
      
    <h2>{props.title}</h2>
    <div className='posters'>
      {ActionMovie.map((obj)=>{
        return(
        <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall? 'smallPoster' :' poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
     
         )
}) 
      }
    </div>

 <YouTube videoId={MovieId} opts={opts} />

    
</div>
  )
}

export default RowPost