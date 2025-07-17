import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from "../../../utils/Axios";
//ketache yalute movieTrailer siraw degemo click sidereg play endaderg new &&  Youtube degemo Video ID(state) ameto play lemadereg emitekem new
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';
  const Row=({title,fetchUrl,isLargeRow})=>{
  const [movies,setMovie]=useState([]);
  const [trailerUrl,setTraileUrl]=useState("");
  const base_url="https://image.tmdb.org/t/p/original";//yihe base URL emigegnew doc. wesit new
  useEffect(()=>{
    (async()=>{
      try{
        console.log(fetchUrl)
        const request=await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      }catch(error){
        console.log("error",error);
      }
    })();//<--note the execution ()here
  },[fetchUrl]);//new url bemeta kutir useEffectu execute madereg alebet so [fetchUrl] yihen metekem aleben we call it"dependency array"
  const handleClick=(movie)=>{
    if(trailerUrl){
      setTraileUrl('')
    }else{
      movieTrailer(movie?.title || movie?.name ||movie?.original_name)
      .then((url)=>{
        console.log(url);
        const urlParams=new URLSearchParams(new URL(url).search)
        console.log(urlParams);
        console.log(urlParams.get('v'));//'v' malet video ID new,you can see on the console
        setTraileUrl(urlParams.get('v'));
      })
    }
  }
  //yihe ketache yalew video lemachawet emitekemebet property new
  const opts={
    hight: '390',
    width: '100%',
    playerVars: {
      autoplay:1,//click sidereg automatically play enidaderg new
    },
  };
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies?.map((movie,index)=>(//be array wesit 20 result ale esun eyandanedu render lemaderge new "index" yetetekemenew..isLargeRow degemo ende props new emitekemew
          <img onClick={()=>handleClick(movie)}
          key={index} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  )
};

export default Row;