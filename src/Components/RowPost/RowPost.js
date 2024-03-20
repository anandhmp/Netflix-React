import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {  imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

const RowPost = (props) => {

  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId]=useState('');
  const [playingTrailer, setPlayingTrailer] = useState(false);


  useEffect(() => {
    axios.get(props.url).then(response=>{
      // console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      console.error('Error fetching movies:', err);
    })
  }, )
  

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      // console.log(response.data)
      if (playingTrailer) {
        setUrlId('');
        setPlayingTrailer(false);
    } else {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0]);
                    setPlayingTrailer(true);
                } else {
                    console.log('Trailer not available');
                }
            });
    }
    })
  }

  return (
    <div className='row'>
        <h5 className={props.isSmall ? 'title-rowSmall' : 'title-row'}>{props.title}</h5>
        <div className= 'posters'>
        {movies && movies.map((obj, index) => (
            <img onClick={()=>{handleMovie(obj.id)}} key={index} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl}${obj.backdrop_path}`} />
        ))}

        </div>
      { urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost