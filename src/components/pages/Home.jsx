
import MoviesList from "../moviesList";
import { useEffect, useState } from "react";

import fetchMovies from "../../fetchMovies";
// tengo que hacer ahora : movies en el home

/*<div className="col-md-3 d-none d- lg -flex flex-column px-5">
    <h4>Estrenos</h4>
    <div className="my-2" >
        { movies && <Movie movie={ movies[0] } onClick={ handleShow } info={ false } /> }
    </div>
    <div className="my-2" >
        { movies && <Movie movie={ movies[1] } onClick={ handleShow } info={ false } /> }
    </div>
</div>


*/

function Home(){

    const [movies, setMovies] = useState( [] );
    const [page, setPage] = useState( 1 );
    const nextPage = ()=> setPage( prev => prev + 1 );


    useEffect( ()=>{
        (async function () {
            const data = await fetchMovies( "discover", 0, page );
            window.addEventListener( "scroll", handleScroll );
            console.log("Dentro del useEffect");
            if( page === 1 ){
                setMovies( data );
            }else setMovies( [ ...movies, ...data] );
        })();
        
        return ()=> window.removeEventListener( "scroll", handleScroll );

    } , [page] );

    const handleScroll = ()=> {
        console.log("HANDLE SCROLL");
        if( document.body.clientHeight < (window.scrollY + window.innerHeight) ){
            window.removeEventListener( "scroll", handleScroll );
            setTimeout( ()=>{
                window.addEventListener( "scroll", handleScroll );
            }, 1000);
            nextPage();
        }
    }

    return <div className="container mt-5" id="main-content" >

        <div className="d-flex align-items-start flex-wrap">
            <h3 className="" >Peliculas Online</h3>
            <button className="btn btn-sm text-light ms-3" >Ultimas</button>
            <button className="btn btn-sm text-light ms-3" >Estrenos</button>
            <button className="btn btn-sm text-light ms-3" >Mas vistas</button>
        </div>

        <div style={{ minHeight: "100px" }} >
            <MoviesList movies={movies} />
        </div>

    </div>
}

export default Home;