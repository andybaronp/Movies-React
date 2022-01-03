import style from "./Search.module.css";
import { MdScreenSearchDesktop } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
const Search = () => {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchText}`);
  };
  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          type="text"
          className={style.searchInput}
          placeholder="Search movies"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className={style.searchButton}>
          <MdScreenSearchDesktop />
        </button>
      </div>
    </form>
  );
};

export default Search;
