import React from "react";
import ButoonEffect from "..//Style/header.module.css";
import MovieContext from "../Context/Contex";
import { useContext } from "react";
import Plays from '../Style/header.module.css'
import HoverEffect from '../Style/header.module.css'
function Movie_Details() {
   const bunner =
      "https://img.hdtoday.tv/xxrz/1300x700/100/87/db/87db01c609dc3a0e1c1349d50d9efc6d/87db01c609dc3a0e1c1349d50d9efc6d.png";
   const { MovieInfo, Movieid } = useContext(MovieContext);
   const {
      id,
      backdrop_path,
      overview,
      title,
      poster_path,
      release_date,
      status,
      runtime,
      vote_count,
      genres,
      tagline,
      production_countries,
      revenue,
      popularity,
      production_companies,
   } = MovieInfo;
   console.log(MovieInfo);

   // formating the Revinue Monny

   const backgroundStyle = {
      backgroundImage:`url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "80vh", // Adjust this as needed
      
   };
   console.log(backdrop_path);
   return (
      <>
         <div style={backgroundStyle} className='container-fluid position-relative '>
           <div className={Plays.play}>
            <i className='fa-solid fa-circle-play d-flex gap-1 '></i>
           </div>
         </div>

         <div
            style={{
               position: "relative",
               top: "-10rem",
            }}
            className='container d-lg-flex gap-4 bg-light text-dark rounded-4 p-3 '
         >
            <div className='col-lg-2 col-md-3 shadow-sm rounded-3 p-3'>
               {poster_path && (
                  <img
                     width={300}
                     className='card-img rounded-4'
                     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                     alt=''
                  />
               )}

               <div className='containerv p-1'>
                  <p className='card-title'>{tagline}</p>
                  <h6>
                     Vote: <span className='text-primary'>{vote_count}</span>
                  </h6>
               </div>

               <div className='container-fluid d-flex p-2 gap-1   justify-content-between align-items-center '>
                  <span
                     className={`${HoverEffect.HoverEffect} p-1 bg-primary rounded-2  text-light`}
                  >
                     <i className='fa-regular fa-thumbs-up'></i> Like
                  </span>
                  <span
                     className={`${HoverEffect.HoverEffect} p-1 bg-dark rounded-2 text-light`}
                  >
                     <i className='fa-regular fa-thumbs-down'></i> Dislike
                  </span>
               </div>
            </div>

            <div className='container '>

                 <div className="container-fluid d-flex justify-content-between align-items-center">
                    <button className={`${HoverEffect.HoverEffect} btn btn-primary  p-2 mt-3`}>
                        <i className='fa-solid fa-circle-play d-flex gap-1 '>play</i>
                    </button>
                    <button className={`${HoverEffect.HoverEffect} btn btn-warning  p-2 mt-3`}>
                    <i className="fa-regular fw-bold  fa-heart d-flex  gap-1 text-secondary ">Favorate</i>  
                    </button>
                 </div>

               <div className='card-body'>
                  <h3>{title}</h3>
                  <p className='card-text text-secondary'>{overview}</p>
               </div>
               <div className='container mt-3'>
                  <div className='d-flex gap-3 '>
                     <h5 className='btn text-primary p-2 bg-transparent   btn-outline-secondary fw-bold  '>
                        {genres?.[0]?.name || null}
                     </h5>
                     <h5 className='btn text-primary  bg-transparent p-2 col-lg-1 btn-outline-secondary fw-bold  '>
                        {status === "Released" ? "HD" : "Comming Soon"}
                     </h5>
                  </div>
               </div>
               <div className='container d-lg-flex gap-5'>
                  <ul className='list-group '>
                     <li className='list-group'>Release: {release_date}</li>
                     <li className='list-group'>Popularty: {popularity}</li>
                     <li
                        className={`list-group ${
                           revenue <= 0 ? `text-danger` : ""
                        }`}
                     >
                        Revenue: {revenue}
                     </li>
                  </ul>

                  <ul className='list-group'>
                     <li className='list-group'>
                        Production:
                        {production_companies !== undefined
                           ? production_companies[0].name
                           : null}
                     </li>
                     <li className='list-group'>
                        Country:
                        {production_countries !== undefined
                           ? production_countries[0].name
                           : "Not available"}
                     </li>
                     <li className='list-group'>Duration: {runtime} min</li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}

export default Movie_Details;
