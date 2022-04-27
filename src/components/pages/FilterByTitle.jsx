import { useEffect, useState } from "react";
import MoviesList from "../moviesList";
import fetchMovies from "../../fetchMovies";



function FilterByTitle(){

    const [movies, setMovies] = useState( [] );
    const [page, setPage] = useState( 1 );

    const [ searchValue, setSearchValue ] = useState( "" );
    const handleSearchValue = (ev)=> setSearchValue(ev.target.value);

    useEffect( ()=>{
        searchValue && (async function () {
            const data = await fetchMovies( "search", searchValue, page );
            if( page === 1 ){
                // Cambio el searchValue
                setMovies( data );
            }else setMovies( [ ...movies, ...data] );
        })();

    }, [searchValue, page] );

    return <div className="container my-5 pt-5" >

        <div>
            <input className="searchInput d-block mw-100 h4 my-0 m-auto px-5" type="text"
                id="searchInput" value={searchValue} onChange={ handleSearchValue }
                autoFocus placeholder="Buscar peliculas..."
                />
        </div>

        <div className='my-5' >
            { movies && <MoviesList movies={movies} /> }
        </div>
        
    </div>
}

export default FilterByTitle;