import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieContext from "../Context/Contex";
import  playEffect from '../Style/header.module.css'
import { useNavigate,  } from "react-router-dom";
function MovieList() {
   //using UseContext accesing the MovieContext
   const { SetMovie, DataMovie, SearchText, SetMovieId } =
      useContext(MovieContext);


   const Nav = useNavigate();
   const API_Key = "9ad1808d754c7eef7a94beac49088c9d";
   const API_URL = `https://api.themoviedb.org/3/search/movie?query=${
      SearchText ? SearchText : "avenger"
   }&`;
   //use Effect for  calling the function Data Fetching
   useEffect(() => {
      DataFetch();
   }, [SearchText]);

   // function Data Fetching with axios
   const DataFetch = () => {
      axios
         .get(`${API_URL}&append_to_response=videos&api_key=${API_Key}`)
         .then((Data) => {
            SetMovie(Data.data.results);
         });
   };

   const HandleDetalis = (id) => {
     SetMovieId(id) || Nav("/Movie") 
   };





console.log(DataMovie)
   return (
      <>
         <main className='container-fluid p-4 '>
            <div className='container'></div>
            <div className='row gap-2 justify-content-center '>
               {/* Chick if have data or null */}

               {DataMovie
                  ? DataMovie.map(
                       (
                          {
                             poster_path,
                             id,
                             release_date,
                             title,
                             vote_average,
                             backdrop_path
                            
                          },
                          idex
                       ) => {
                          return (
                             <div
                                key={idex}
                                style={{
                                   width: "14rem",
                                }}
                                className='card col-10 col-lg-2 p-2 border-0  '
                             >
                                {poster_path && (
                                   <div className="position-relative p-1">
                                      <img
                                         className='card-img'
                                         src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                         alt=''
                                      />
                                      <div  onClick={() => HandleDetalis(id)} className={playEffect.playEffect}>
                                        <i className="fa-solid fa-circle-play fs-1 text-primary"></i>
                                      </div>
                                   </div>
                                )}

                                <div
                               
                                   className='card-body'
                                >
                                   <h5 className='card-title'>{title}</h5>
                                   <div className='.container-fluid d-flex p-2 justify-content-between '>
                                      <p className='text-muted'>
                                         {release_date}
                                      </p>
                                      <span>
                                         {vote_average}
                                         <i className='text-warning fa-solid fa-star'></i>
                                      </span>
                                   </div>
                                </div>
                             </div>
                          );
                       }
                    )
                  : null}
            </div>
         </main>
      </>
   );
}

export default MovieList;
