import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {  imageUrl } from '../../constants/constants'

const RowPost = (props) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      console.error('Error fetching movies:', err);
    })
  }, [])
  

  return (
    <div className='row'>
        <h5 className={props.isSmall ? 'title-rowSmall' : 'title-row'}>{props.title}</h5>
        <div className= 'posters'>
        {movies && movies.map((obj, index) => (
            <img key={index} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl}${obj.backdrop_path}`} />
        ))}

        </div>
    </div>
  )
}

export default RowPost