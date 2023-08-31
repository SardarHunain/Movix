import { useEffect, useState } from "react";
import Results from "./components/Results";
import axios from "axios";
import './App.css'

function App() {
  
  const[movies,setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_SEARCH_API_KEY}&page=1`
  const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_SEARCH_API_KEY}&query=${search}`

  const changeSearch = (event)=>{
    setSearch(event.target.value)
  }
  const getSearchedMovies = ()=>{
    axios.get(SEARCHAPI)
    .then(
      (response)=>{
        setMovies(response.data.results)
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }

  const getAllMovies = ()=>{
    axios.get(APIURL)
    .then(
      (response)=>{
        setMovies(response.data.results)
      }
    )
    .catch(
    (error)=>{
      console.log(error);
    }
   )
  }

  useEffect(
    ()=>{
      document.title = "MOVIX"
    }
  ,[])

  useEffect(
    ()=>{
      search === "" ? getAllMovies() : getSearchedMovies();
    },
    [search]
  )

  return (
    <>
      <h1 className="text-[50px] bg-black text-white text-center">
        MOVIX
      </h1>
      <div className='max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3 bg-black' id="scrollable">
        <input type='search' value={search} placeholder="search your favourite movies here" onChange={changeSearch} className="w-full border border-black rounded p-3 text-slate-700" />
        {
          movies.length === 0
          ?
          <div className="text-3xl mt-2 text-center">
            LOADING PLEASE WAIT ........
          </div>
          :
          <Results movies={movies}/>
        }
        
        
      </div>
    
    </>
  );
}

export default App;
