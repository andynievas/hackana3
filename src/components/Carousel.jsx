
import { Carousel } from "react-bootstrap";
import "./carousel.css";

export default function ({ movies }) {

  console.log(movies);
  const logo = "https://via.placeholder.com/150";


  return <Carousel interval={2000} controls={false} >
    {movies.map(movie => {
      const imgURL = movie.backdrop_path ?
        `https://image.tmdb.org/t/p/original${movie.poster_path}`
        : logo;
      return <Carousel.Item key={movie.id} >
        <img
          className="d-block w-100 carousel-image"
          src={imgURL}
          alt="First slide"
        />
        <div className="shadow-position dark-shadow-inset"></div>
        <Carousel.Caption className="text-start" >
          <h3>{movie.title}</h3>
          <p className="only-one-line" >{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    })}
  </Carousel>
}