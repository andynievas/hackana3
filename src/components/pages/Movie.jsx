
import { useEffect, useState } from "react";
import logo from "../../assets/app-icon.jpg";

import key from "../../data/key";

function Movie({ movieID }){
    
    const urlBase = `https://api.themoviedb.org/3/movie/${"833425"}?api_key=${key}`;

    const [movie, setMovie] = useState({});

    useEffect( ()=>{
        async function getMovie(){
            const response = await fetch( urlBase );
            const data = await response.json();
            console.log( data );
            setMovie( data );
        }
        getMovie();
    } , [] );

    const imgURL = movie.poster_path && `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const backImgURL = movie.backdrop_path ?
        `https://image.tmdb.org/t/p/original${ movie.backdrop_path }`
        : logo;


    return <div className="container" >
    
        <div className="imgFondo" style={{ backgroundImage: `url(${ backImgURL })` }} >

            <div className="blur-sm" >
                <img className="w-50" src={imgURL} alt="andy" />
                <img className="w-100 d-none" src={backImgURL} alt="andy" />
                <h3>{ movie.title }</h3>
            </div>

        </div>
    </div>
}

export default Movie;