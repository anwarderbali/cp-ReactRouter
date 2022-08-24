import React from "react";
import MovieCard from "./MovieCard";
import Addmovie from "./Addmovie";
import {Link}from 'react-router-dom'
const MovieList = ({moviesListe , setMoviesListe}) => {

  const addNewMovie = (data) => {
    setMoviesListe([...moviesListe, data]);
    console.log(moviesListe)
}

  const card = moviesListe.map((movie) => {
    return (
      <div>
        <MovieCard movie={movie} key={movie.id} /> 
      </div>
    );
});
  return (
  <div className="display">{card}<br/>
  <Addmovie addData={addNewMovie}/>
              
  </div>
  );
};
export default MovieList;
