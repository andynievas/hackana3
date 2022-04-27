
import { useState } from "react";
import icon from "../assets/app-icon.jpg";
import { Routes, Route, Link } from 'react-router-dom';

const posiblesNombres = ["Hackana3", "Hackflix", "Cuevhademy3", "Cuevhack3", "CuevanHA3"];

function Navbar(){

    const [ title, setTitle ] = useState( 0 );
    const changeTitle = ()=> setTitle( prev => title > 3 ? 0 : prev + 1 );

    return <nav className="sticky-top bg-primary-dark text-light py-2" >{ /* Convertir en un componente */ }
        <div className="container">
        
            <div className="row">
                <div className="col-md-10 col-lg-9 d-block d-sm-flex align-items-center justify-content-between flex-wrap">
                {/* Mas adelante pasa a ser un <a> */}
                    <Link to="/" className="text-decoration-none text-white " >
                        <div className="d-flex align-items-center" style={{ flex: 1 }} >
                            <img style={{ width: "3rem", height: "3rem", objectFit: "cover" }} src={ icon } alt="app-icon" />
                            <h1 className="display-4 fw-bold m-0 " style={{ cursor: "pointer" }} >{ posiblesNombres[title] }</h1>
                        </div>
                    </Link>

                    <Routes>
                        <Route path="search" element={<Link to="/filter-by-rating" className="btn btn-secondary" >Filtrar por rating</Link>} />
                        <Route path="*" element={
                            <Link to="/search">
                            <button
                                className="searchInput w-100 my-2" type="text"
                                id="searchBtn" style={{ minWidth: "13rem" }}
                            >Buscar peliculas...</button>
                        </Link>
                        } />
                    </Routes>
                    
                    {/* <Link to="/search">
                        <button
                            className="searchInput w-100 my-2" type="text"
                            id="searchBtn" style={{ minWidth: "13rem" }}
                        >Buscar peliculas...</button>
                    </Link> */}
                </div>
                <div className="col-md-2 col-lg-3 d-none d-md-flex align-items-center justify-content-end">
                    <span className="d-none d-lg-block me-5" >Entrar</span>
                    <button className="btn btn-primary px-3 rounded-lg" >Registro</button>
                </div>
            </div>

        </div>
    </nav>
}

export default Navbar;