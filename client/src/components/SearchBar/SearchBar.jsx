import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
// import { Link } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handlechange = (element) => {
    setSearch(element.target.value);
  };

  const handleClick = () => {
    dispatch(getPokemonByName(search));
    setSearch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(getPokemonByName(search));
      setSearch("");
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className={styles.searchBar}>
        <input
          onChange={handlechange}
          type="tex"
          placeholder="Search your pokemon"
          value={search}
        />
        <button onClick={handleClick} className={styles.btnPrimary}>
          SEARCH
        </button>
      </div>
      {/* <div>
        <Link to="/pokemons">
          <button className={styles.btnPrimary}>BACK</button>
        </Link>
      </div> */}
    </div>
  );
}

export default SearchBar;
