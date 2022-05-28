import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import FilterByTitle from "./components/pages/FilterByTitle";
import FilterByRating from "./components/pages/FilterByRating";
import Movie from "./components/pages/Movie";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';


function App() {



  // useEffect( ()=>{
  //   window.addEventListener( "scroll", handleScroll );
  //   return ()=> window.removeEventListener( "scroll", handleScroll );
  // } , [] );

  // useEffect( ()=>{
  //     fetch( url + `&page=${page}` )
  //         .then( response => response.json() )
  //         .then( data => { console.log( "Fetch url, page:", page ); setMovies( movies ? [...movies, ...data.results] : data.results ) } )
  //         .catch( error => console.log(error) );
  // } , [page]);


  return (
    <div className="App text-light">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<FilterByTitle />} />
        <Route path="/filter-by-rating" element={<FilterByRating />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>

      <footer className="my-4 py-5" >
        <p className="text-light text-center" >© 2022 Hackana3 Peliculas Online - Todos los derechos reservados.</p>
        <p className="text-light text-center" >by: <a href="https://linkedin.com/in/andy-nievas" target="_blank" >Andy Nievas</a></p>
      </footer>

    </div>
  );
}

export default App;
