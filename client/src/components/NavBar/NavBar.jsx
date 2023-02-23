import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={style.container}>
      <div className={style.links}>
        <Link to="/pokemons" className={style.btnPrimary}>
          POKEMONS
        </Link>
        <Link to="/createpokemon" className={style.btnPrimary}>
          ADD A POKEMON
        </Link>
      </div>
      <div>
        {location.pathname === "/pokemons" && (
          <SearchBar className={style.searchBar} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
