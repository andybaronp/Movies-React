import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { BiStar } from "react-icons/bi";
const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img
          alt={movie.title}
          className={styles.movieImg}
          width={230}
          src={imgUrl}
          height={345}
        />
        <div className={styles.average}>
          <span>{movie.vote_average}</span>
          <BiStar className={styles.star} />
        </div>
        <div>{movie.title}</div>
      </Link>
    </li>
  );
};

export default MovieCard;
