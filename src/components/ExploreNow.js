import React, {useEffect} from 'react'
import ExploreAnime from './Exploreanime';

const animeapi = 'https://api.jikan.moe/v4/seasons/upcoming';
const searchanime = "https://api.jikan.moe/v4/anime?q=";


export default function ExploreNow() {
    const [movies, setMovies] = React.useState([]);
   const [searchTerm,setSearchTerm] = React.useState('');


  const getMovies = (animeapi) =>{
    fetch(animeapi)
    .then((res) =>res.json())
    .then((data) => {
setMovies(data.data);
    })
  }

   useEffect(() => {
     getMovies(animeapi)
   },[])

   const handleSearch = e => {
     e.preventDefault();
     setSearchTerm(e.target.value)
   }

   const onSubmit = e =>{
e.preventDefault();
if(searchTerm){
  getMovies(searchanime + searchTerm)
}else{
  getMovies(animeapi)
}
   }

   const  [fav,setFav] = React.useState([])

   const handleFav = (movie) => {
    const favmovie = [...fav,movie]
    setFav(favmovie)
     console.log(movie)
   }


  return (
    <div>
      <form onSubmit={onSubmit}>
      <input type="search"className="w-100 border-0 p-2 text-uppercase" 
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search your Anime"/>
      </form>

      <div className="animeshow">
    {movies.map(movie => <ExploreAnime handleFav={handleFav} key={movie.id} {...movie}/>)}
      </div>

     </div> 
  )
}