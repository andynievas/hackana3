import { useState } from 'react';
import './movie.css';
import logo from "../assets/app-icon.jpg";
import { Link } from "react-router-dom";

function Spinner() {
    return <div className="spinner-wrapper w-100 h-100 d-flex justify-content-center align-items-center" >
        <div className="spinner spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}

export default function Movie({ movie }) {

    const [loading, setLoading] = useState(true);

    const imgURL = movie.poster_path ?
        `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : logo;

    return <div className="movie-card h-100" >

        <Link to={`/movie/${movie.id}`} className="w-100 text-light text-decoration-none" >
            <div className="visible-area h-100" >
                <img className="w-100 h-100 rounded shadow" src={imgURL} alt={movie.title} onLoad={() => setLoading(false)} />
                <span className="yearOnImage small fw-bold bg-primary px-2 rounded-lg" >{movie.release_date && movie.release_date.substring(0, 4)}</span>
                {loading && <Spinner />}
            </div>
        </Link>

        <div className="info h-100 " >
            <div className="position-relative" >

                <div className="imgFondo rounded" >
                    <img className="imgFondo blur rounded my-auto" src={imgURL} />
                </div>
                <div className="content p-4" >
                    <h5 className="text-light fw-bold mt-0 mb-2 pb-1" >{movie.title} </h5>
                    <span className="text-warning fw-bold" ><span className="lead fw-bold" >{movie.vote_average && movie.vote_average}/</span><span className="small" >10</span></span>
                    <span className="mx-2 small" >{movie.release_date && movie.release_date.substring(0, 4)}</span>
                    <span className="text-dark small fw-bold bg-warning px-1 rounded" >HD</span>
                    <p className="overview mt-2 mb-0 p-0" >{movie.overview ? movie.overview : "No hay descripcion"}</p>
                </div>

            </div>
        </div>
    </div>
}