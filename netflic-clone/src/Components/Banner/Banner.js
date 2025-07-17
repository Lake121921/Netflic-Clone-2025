
import axios from '../../utils/Axios';
import React, { useEffect, useState } from 'react'
import Requests from '../../utils/Requests';
import "../Banner/Banner.css";
const Banner = () => {
    const[movie,setMovie]=useState({});
    useEffect(()=>{
        (async()=>{
            try{
                const request=await axios.get(Requests.fetchNetflixOrginals)
                //ke axios lay orginal url wesedo keza requests wesite gebito concatinate yadergal.
                console.log(request);
                setMovie(request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                    //math.floor emilew ke bizu data random display endiaderg new
                ]);
            }catch(error){
                console.log("error",error);
            }
    })()
    },[]);
    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1)+ '...':str;
    }
  return (
    <div className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,//? optional change tibalalech tebiko new change emiadergew(image simeta tebiko new reload emiadergew)
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat"
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button play'>play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
        
        </div>
        <div className='banner_fadeBottom' />
    </div>
  )
}
export default Banner;
