import CardsPokemons from "../../components/CardsPokemons/CardsPokemons";
import Paged from "../../components/Paged/Paged";
import Filters from "../../components/Filters/Filters";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemonTypes } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.filteredPokemons);
  // const types = useSelector((state) => state.pokemonTypes);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage /*setPokemonPerPage*/] = useState(12);
  const lastPokemon = currentPage * pokemonPerPage;
  const firstPokemon = lastPokemon - pokemonPerPage;
  const currentPokemons = pokemons.slice(firstPokemon, lastPokemon);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, [dispatch]);

  return (
    <>
      <div>
        <div>
          <Paged
            pokemonPerPage={pokemonPerPage}
            Pokemons={pokemons.length}
            paged={pagination}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />

          <div>
            <Filters />
          </div>

          <div className={styles.displayCards}>
            {currentPokemons?.map((element) => {
              return (
                <div>
                  <Link to={`pokemons/${element.id}`} key={element.id}>
                    <CardsPokemons
                      className={styles.displayCards}
                      id={element.id}
                      name={element.name}
                      life={element.life}
                      image={element.image}
                      key={element.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
