import React from "react";
import MovieCard from "./MovieCard";
import Addmovie from "./Addmovie";
const MovieList = ({moviesListe , setMoviesListe}) => {

  const addNewMovie = (data) => {
    setMoviesListe([...moviesListe, data]);
    console.log(moviesListe)
}

  const card = moviesListe.map((movie ) => {
    return (
      <div key={movie.id}>
        <MovieCard movie={movie}  /> 
      </div>
    );
});
  return (
  <div className="display"  >{card}<br/>
  <Addmovie addData={addNewMovie}/>
              
  </div>
  );
};
export default MovieList;
