import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { getData } from "../../utils/fetch";
import style from "./MovieDetails.module.css";
import { BiStar } from "react-icons/bi";
import { getMovieImg } from "../../utils/getMovieImg";

const MoviesDatails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imgUrl = getMovieImg(movie.poster_path, 300);
  useEffect(() => {
    setIsLoading(true);
    getData(`/movie/${id}`).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [id]);

  //retur

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={style.detailsContainer}>
      <img
        src={imgUrl}
        alt={movie.title}
        className={`${style.movieImg} ${style.col}`}
      />
      <div className={`${style.details} ${style.col}`}>
        <h2>
          <span> Title:</span> {movie.title}
        </h2>
        <p>
          <span>Genres:</span>{" "}
          {movie.genres?.map((genre) => genre.name).join(", ")}
        </p>
        <div className={style.average}>
          <span>{movie.vote_average}</span>
          <BiStar className={style.star} />
        </div>
        <p>
          <span>Description:</span> {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MoviesDatails;
