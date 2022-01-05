import style from "./Search.module.css";
import { MdScreenSearchDesktop } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          type="text"
          className={style.searchInput}
          placeholder="Search movies"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value });
            // navigate(`/?search=${value}`);
          }}
        />

        <MdScreenSearchDesktop className={style.searchButton} />
      </div>
    </form>
  );
};

export default Search;
