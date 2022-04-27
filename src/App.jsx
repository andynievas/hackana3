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

      <Routes>
        <Route path="/" element={
          <header className="d-none bg-primary-dark py-2 py-xxl-5" >{ /* Convertir en un componente */}
            <div className="container jumbotron text-light py-5">
              <h2 className="text-center" >Tus peliculas favoritas</h2>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
          </header>
        } />
      </Routes>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<FilterByTitle />} />
        <Route path="/filter-by-rating" element={<FilterByRating />} />
        <Route path="/movie" element={<Movie movieID={"andy"} />} />
      </Routes>

      <footer className="my-5 py-5" >
        <p className="text-light text-center my-4" >© 2022 Hackflix Peliculas Online, Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
