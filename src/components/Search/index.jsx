import style from "./Search.module.css";
import { MdScreenSearchDesktop } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
const Search = () => {
  const query = useQuery();
  const search = query.get("search");
  const navigate = useNavigate();

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
            navigate(`/?search=${value}`);
          }}
        />

        <MdScreenSearchDesktop className={style.searchButton} />
      </div>
    </form>
  );
};

export default Search;
