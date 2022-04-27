import Movie from "./movie";

function MoviesList({ movies }) {

    return <div className='row' >
        { movies && movies.length > 0 ? movies.map( (item)=> <div className="col-6 col-sm-4 col-lg-3 col-xxl-2 g-3" key={item.id} >
            <Movie movie={ item } />
        </div>
        ) : <div className="col-12" ><h3 className="text-muted text-center py-2 " >No se encuentra la pelicula buscada</h3></div> }
    </div>
}

export default MoviesList;