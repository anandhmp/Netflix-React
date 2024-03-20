import React,{ useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'


const Banner = () => {

    const [movie, setMovie] = useState('')

    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const randomMovie = response.data.results[randomIndex];
        setMovie(randomMovie);
        console.log(randomMovie.title);
      })
    }, [])  
    

  return (
    <div style={{backgroundImage: movie ? `url(${imageUrl}${movie.backdrop_path})` : ''}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className='description'>{movie ? movie.overview: ""}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner