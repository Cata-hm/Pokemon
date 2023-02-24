import {
  GET_ALL_POKEMONS,
  GET_POKEMON_TYPES,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  CLEAR_POKEMON_BY_ID,
  CLEAR_STATE,
  ADD_POKEMON,
  FILTER_BY_TYPE,
  FILTER_BY_CREATOR,
  ORDER_ASCENDING,
  ORDER_DESCENDING,
  ORDER_ATTACK_DESCENDING,
  ORDER_ATTACK_ASCENDING,
} from "../redux/actions";

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  addedPokemon: false,
  pokemonById: [],
  pokemonTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        addedPokemon: action.payload,
      };

    case CLEAR_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: [],
      };

    case CLEAR_STATE:
      return {
        ...state,
        filteredPokemons: state.allPokemons,
        addedPokemon: false,
      };

    case FILTER_BY_TYPE:
      let fullPokemons2 = state.allPokemons;
      let resultApi = fullPokemons2.filter(
        (p) => p.type && p.type.includes(action.payload)
      );
      let resultDb = fullPokemons2.filter(
        (p) => p.Types && p.Types.map((t) => t.name).includes(action.payload)
      );
      let result = resultApi.concat(resultDb);
      return {
        ...state,
        filteredPokemons: result,
      };

    case FILTER_BY_CREATOR:
      const filteredCreator = state.allPokemons.filter((p) => {
        return p.created.toString() === action.payload;
      });
      if (filteredCreator.length) {
        return {
          ...state,
          filteredPokemons: filteredCreator,
        };
      } else {
        return {
          ...state,
          filteredPokemons: false,
        };
      }

    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        filteredPokemons: action.payload,
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      let search;
      if (action.payload.length === 0) {
        search = ["error"];
      } else {
        search = action.payload;
      }
      return {
        ...state,
        filteredPokemons: search,
      };

    case GET_POKEMON_TYPES:
      return {
        ...state,
        pokemonTypes: [...action.payload],
      };

    case ORDER_ASCENDING:
      const sortAscending = state.allPokemons.slice().sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      return {
        ...state,
        filteredPokemons: sortAscending,
      };

    case ORDER_DESCENDING:
      const sortDescending = state.filteredPokemons.slice().sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      return {
        ...state,
        filteredPokemons: sortDescending,
      };
    case ORDER_ATTACK_ASCENDING:
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.sort((a, b) => {
          if (a.attack > b.attack) return -1;
          if (a.attack < b.attack) return 1;
          return 0;
        }),
      };

    case ORDER_ATTACK_DESCENDING:
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.sort((a, b) => {
          if (a.attack < b.attack) return -1;
          if (a.attack > b.attack) return 1;
          return 0;
        }),
      };

    default:
      return state;
  }
};

export default rootReducer;
