
import { useEffect, useState } from "react";
import Rating from "react-rating";
import MoviesList from "../moviesList";
import InfiniteScroll from "../InfiniteScroll";
import fetchMovies from "../../fetchMovies";


function FilterByRating() {

    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState(3);
    const [page, setPage] = useState(1);
    const ratingMod = rating * 1.8;

    useEffect(() => {
        (async function () {
            const data = await fetchMovies("discover", ratingMod, page);
            if (page === 1) {
                // Cambio el rating
                setMovies(data);
            } else setMovies([...movies, ...data]);
        })();

    }, [rating, page]);

    const handleScroll = () => setPage(prev => prev + 1);

    return <div className="container mt-5" >
        <InfiniteScroll action={handleScroll} interval={2000} />
        <div id="ratingDiv" className="my-5 pt-5 d-flex justify-content-center">
            <Rating initialRating={rating} onChange={(value) => { setRating(value); setPage(1); }} />
        </div>

        <div className='my-5' >
            {movies && <MoviesList movies={movies} />}
        </div>
    </div>
}

export default FilterByRating;