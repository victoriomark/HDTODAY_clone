import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./Layout";
import MovieList from "./Components/MovieList";
import Movie_Details from "./Components/Movie_Details";
import MovieContextProvider from "./Context/MovieContextProvider";
import MovieContext from "./Context/Contex";
import {
   Route,
   RouterProvider,
   createRoutesFromElements,  
   createBrowserRouter,
} from "react-router-dom";

// declaration of Router
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<Layout />}>
         {/*  add your routes here  */}
         <Route path='/' element={<MovieList />} />
         <Route path="/Movie" element={<Movie_Details/>} />
         <Route path='/Home' element={<MovieList />} />
      </Route>
   )
);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <MovieContextProvider>
         <RouterProvider router={router} />
      </MovieContextProvider>
   </React.StrictMode>
);
