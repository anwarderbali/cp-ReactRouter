import "./App.css";
import Filter from "./component/Filter";
import MovieList from "./component/MovieList";
import Description from "./component/Description"
import {useState} from 'react'
import {Routes,Route} from "react-router-dom"
function App() {

  const [keyWord , setKeyWord] = useState ("")
  const [rating , setRating] = useState(1)
  const [moviesListe, setMoviesListe] = useState([ 
    {
    id: "1",
    title: "Cinderella",
    description:"description:American animated film, released in 1950, that was made by Walt Disney and was based on the fairy tale by Charles Perrault. . ",
    posterURL:  "https://i.ytimg.com/vi/IxNjzJ5uGTU/maxresdefault.jpg",
    rating: 1,
    trailer:<iframe width={560} height={315} src="https://www.youtube.com/embed/T1NeHRuPpoM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    
  },
  {
    id: "2",
    title: "The Lion King",
    description: "Few animated films have charged onto the screen with the confidence of Disney’s 1994 smash “The Lion King.” Eschewing opening titles, a giant red sun rising over the Serengeti filled the screen, as the soundtrack blasted the majestic opening song, “The Circle of Life.”",
    posterURL:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548893746-51kT05ugyOL.jpg?crop=0.889xw:1xh;center,top&resize=480:*",
    rating: 3,
    trailer:<iframe width={560} height={315} src="https://www.youtube.com/embed/4CbLXeGSDxg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    ,
  },
  {
    id: "3",
    title: "VAMPS",
    description: "is a 2012 American comedy horror film directed by Amy Heckerling and starring Alicia Silverstone and Krysten Ritter. It was released on November 2, 2012",
    posterURL: "https://image.tmdb.org/t/p/w500/tA7revVjwKOd7JnNyi2P4gK4mVM.jpg",
    rating: 4,
    trailer:<iframe width={560} height={315} src="https://www.youtube.com/embed/KhzHXrTzATo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    ,
  },
  {
    id: "4",
    title: "Home Alone",
    description: " is a 1990 American Christmas comedy film directed by Chris Columbus and written and produced by John Hughes. The first film in the Home Alone franchise, the film stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O'Hara.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
    rating: 2,
    trailer:<iframe width={560} height={315} src="https://www.youtube.com/embed/2BkVf2voCr0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    ,
},
])
  const search = (text) => {
    setKeyWord(text)
  }
  const handleRating = (number) => {
    setRating(number)
  }
  return (
    <div className="App">
      <Filter search={search} handleRating={handleRating} />
      <Routes>
          <Route path='/' element={<MovieList moviesListe={moviesListe.filter(el=>el.title.toLowerCase().includes(keyWord.toLowerCase().trim())&& el.rating>=rating)} setMoviesListe={setMoviesListe}/> }/>
          <Route path='/:id' element={ <Description moviesListe={moviesListe} /> } />
      </Routes>
    </div>
  );
}
export default App;
