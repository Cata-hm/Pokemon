import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonById, getPokemonTypes } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import gif from "../../assets/img/giphy.gif";
import styles from "./Detail.module.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemonById); // I save in the detail the state pokemonById:[] of the reducer

  useEffect(() => {
    dispatch(getPokemonById(id)); //when the component is mounted I dispatch the getPokemonById action with the id that I captured from the dynamic URL
    dispatch(getPokemonTypes(id));
  }, [dispatch, id]);

  return (
    <div className={styles.content}>
      {!Object.keys(detail).length ? ( //This happens if detail is empty
        <Loading src={gif} alt="" className="pokeball-gif" />
      ) : (
        <>
          <div className={styles.details}>
            <div>
              <h1>{detail.name}</h1>
              <img src={detail.image} alt={detail.name} />
            </div>
            <div>
              <h3>Height: {detail.height}</h3>
              <h3>Life: {detail.life}</h3>
              <h3>Attack: {detail.attack}</h3>
              <h3>Defense: {detail.defense}</h3>
              <h3>Speed: {detail.speed}</h3>
              <h3>
                Types:{" "}
                {detail.types?.map((element, index) => (
                  <span key={index}>{element.name} </span>
                ))}{" "}
              </h3>
            </div>
          </div>
          <div className={styles.button}>
            <Link to="/pokemons">
              <button className={styles.btnPrimaryBack}>Back</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
