import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { getData } from "../../utils/fetch";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "../Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const MoviesGrid = ({ search }) => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);

  //Get the data from the API
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    getData(searchUrl).then((data) => {
      console.log(data);
      setMovie((prevMovie) => prevMovie.concat(data.results));
      setHasMore(data.page < data.total_pages);

      setIsLoading(false);
    });
  }, [search, page]);
  console.log(hasMore);
  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevePag) => prevePag + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.Moviesgrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default MoviesGrid;
