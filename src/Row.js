import React from 'react';
import { useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const   baseURL="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchURL,isLarge}) => {
  const [movies,setMovies]=useState([]);
  const [trailerUrl,setTrailerURL]=useState("");
  //a code snippet which runs on specific condition
  useEffect(() => {
    //if [],run once the row loads ,and dont run again
    async function fetchData(){
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData(); 
  },[fetchURL]);   

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
          autoplay:1,
    },
  }
  const handleClick = (movie) => {
   if(trailerUrl) {
    setTrailerURL('');
   }else {
    movieTrailer(movie?.name || "").then((url) => {
      const urlParams = new URLSearchParams( new URL (url).search);
     setTrailerURL( urlParams.get('v'));
    }).catch((error) => console.log(error));
   }
  };
  return (
    <div className="row">
         <h1>{title}</h1>
         <div className= "row-posters">
          { movies.map(movie =>(
            <img key={movie.id} onClick = {() => handleClick (movie)} className= {`row-poster ${isLarge && "row-posterLarge" }`} src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>

          )
      
          )}
        
         </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row