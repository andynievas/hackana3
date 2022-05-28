
import MoviesList from "../moviesList";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import fetchMovies from "../../fetchMovies";
import InfiniteScroll from "../InfiniteScroll";
import Carousel from "../Carousel";


function Home() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [showSpineer, setShowSpineer] = useState(true);


    useEffect(() => {
        (async function () {
            setShowSpineer(true);
            const data = await fetchMovies("discover", 0, page);
            console.log("Dentro del useEffect");
            if (page === 1) {
                setMovies(data);
            } else setMovies([...movies, ...data]);
            setShowSpineer(false);
        })();

    }, [page]);

    const handleScroll = () => setPage(prev => prev + 1);

    return <>
        <InfiniteScroll action={handleScroll} interval={2000} />
        <header className="bg-primary-dark" >{ /* Convertir en un componente */}
            <Carousel movies={movies.filter((item, index) => index < 5)} />
        </header>

        <div className="container mt-5" id="main-content" >
            <div className="d-flex align-items-start flex-wrap">
                <h3 className="" >Peliculas Online</h3>
                <button className="btn btn-sm text-light ms-3" >Ultimas</button>
                <button className="btn btn-sm text-light ms-3" >Estrenos</button>
                <button className="btn btn-sm text-light ms-3" >Mas vistas</button>
            </div>

            <div style={{ minHeight: "100px" }} >
                <MoviesList movies={movies} />
                {showSpineer && <div className="d-flex justify-content-center my-5" >
                    <Spinner animation="border" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>}
            </div>
        </div>
    </>
}

export default Home;