

import key from "./data/key";


async function fetchMovies( action, filter, page ){

    let urlBase = `https://api.themoviedb.org/3/${action}/movie?api_key=${key}&include_adult=false&vote_count.gte=10`;
    
    if( action === "search" ){
        urlBase += `&query=${filter}&page=${page}`
    }else{
        urlBase += `&vote_average.gte=${filter}&page=${page}`
    }

    try{
        console.log( "Fetch url, page:", page );
        console.log( "Fetch url:", urlBase );
        const response = await fetch( urlBase );
        const data = await response.json();
        return data.results;
    }
    catch (err){
        console.log( err );
    }

}

export default fetchMovies;