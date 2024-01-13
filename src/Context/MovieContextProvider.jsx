import axios from "axios";
import MovieContext from "./Contex";
import { useEffect, useReducer, useState } from "react";

function MovieContextProvider({ children }) {
   const API_Key = "9ad1808d754c7eef7a94beac49088c9d"; // Api key
   const [DataMovie, SetMovie] = useState([]);
   const [SearchText, SetSearch] = useState("Re");
   const [Movieid, SetMovieId] = useState(null);
   const [MovieInfo, SetInfo] = useState([]);
   // Api Call for Movie Details
   useEffect(() => {
      Movieid // cchick if may id or wala pag wala null sya if meron call nya yong details
         ? axios
              .get(
                 `https://api.themoviedb.org/3/movie/${Movieid}?api_key=${API_Key}`
              )
               
              .then((Detais) => {
                 SetInfo(Detais.data);
              })
            
         : null;
   }, [Movieid]);
 
   return (
      <MovieContext.Provider
         value={{
            // Mga provider dito
            SetMovie,
            DataMovie,
            SetSearch,
            SearchText,
            MovieInfo,
            SetMovieId,
            Movieid,
          
         }}
      >
         {children}
      </MovieContext.Provider>
   );
}

export default MovieContextProvider;
