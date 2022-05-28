
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/app-icon.jpg";
import "./Movie.css";

const key = process.env.REACT_APP_API_KEY;

function Movie() {

    const [movie, setMovie] = useState({});
    const params = useParams();
    const urlBase = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

    useEffect(() => {
        async function getMovie() {
            const response = await fetch(urlBase);
            const data = await response.json();
            console.log(data);
            setMovie(data);
        }
        getMovie();
    }, []);

    const mainImgURL = movie.poster_path ?
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : logo;

    const backgroundImgURL = movie.backdrop_path ?
        `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : logo;


    return <div className="container" >

        <div id="backdrop-path" style={{ backgroundImage: `url(${backgroundImgURL})` }} >

            <div className="blur-sm" >
                <img id="poster-path" src={mainImgURL} alt={`Image of ${movie.title}`} />
                <h3>{movie.title}</h3>
            </div>

        </div>
    </div>
}

export default Movie;