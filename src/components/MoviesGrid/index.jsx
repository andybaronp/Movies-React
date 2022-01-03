import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { getData } from "../../utils/fetch";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "../Spinner";
import { useQuery } from "../../hooks/useQuery";

const MoviesGrid = () => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = useQuery();
  const search = query.get("search");

  console.log(movies);
  //Get the data from the API
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    getData(searchUrl).then((data) => {
      setMovie(data.results);
      setIsLoading(false);
    });
  }, [search]);
  return isLoading ? (
    <Spinner />
  ) : (
    <ul className={styles.Moviesgrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
