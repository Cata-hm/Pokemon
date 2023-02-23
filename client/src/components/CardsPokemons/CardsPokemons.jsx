// import { useSelector } from "react-redux";
import Card from "../Card/Cards";

const CardsPokemons = ({ id, name, life, image }) => {
  // const pokemons = useSelector((state) => state.allPokemons);

  return (
      <div>
        <Card id={id} name={name} life={life} image={image} key={id} />
      </div>
  );
};

export default CardsPokemons;
