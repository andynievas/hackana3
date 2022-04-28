
import MoviesList from "../moviesList";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import fetchMovies from "../../fetchMovies";
import InfiniteScroll from "../InfiniteScroll";


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

    return <div className="container mt-5" id="main-content" >
        <InfiniteScroll action={handleScroll} interval={2000} />

        <header className="d-none bg-primary-dark py-2 py-xxl-5" >{ /* Convertir en un componente */}
            <div className="container jumbotron text-light py-5">
                <h2 className="text-center" >Tus peliculas favoritas</h2>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
        </header>

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
}

export default Home;