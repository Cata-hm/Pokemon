import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_TYPES = "GET_POKEMON_TYPES";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const CLEAR_POKEMON_BY_ID = "CLEAR_POKEMON_BY_ID";
export const CLEAR_STATE = "CLEAR_STATE";
export const ADD_POKEMON = "ADD_POKEMON";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_CREATOR = "FILTER_BY_CREATOR";
export const ORDER_ASCENDING = "ORDER_ASCENDING";
export const ORDER_DESCENDING = "ORDER_DESCENDING";
export const ORDER_ATTACK_DESCENDING = "ORDER_ATTACK_DESCENDING";
export const ORDER_ATTACK_ASCENDING = "ORDER_ATTACK_ASCENDING";

const URL = "https://pokemon-api-c72r.onrender.com";

// Get

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons`);
      dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
    } catch (error) {
      console.log("Get all pokemons:", error);
    }
  };
}

export function getPokemonTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/types`);
      dispatch({ type: GET_POKEMON_TYPES, payload: response.data });
    } catch (error) {
      console.log("Get pokemon types:", error);
    }
  };
}

export function getPokemonByName(payload) {
  return async function (dispatch) {
    try {
      let pokemon = await axios.get(`${URL}/pokemons?name=` + payload);
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: error.name,
      });
    }
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons/${id}`);
      dispatch({ Type: GET_POKEMON_BY_ID, payload: response.data });
    } catch (error) {
      dispatch({ Type: GET_POKEMON_BY_ID, payload: null });
    }
  };
}

// Clear

export function clearPokemonById() {
  return {
    type: CLEAR_POKEMON_BY_ID,
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}

// Post

export function addPokemon(pokemon) {
  return async function (dispatch) {
    try {
      dispatch({ type: ADD_POKEMON, payload: true });
      await axios.post(`${URL}/pokemons`, pokemon);
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_POKEMON, payload: false });
    }
  };
}

// Filter

export function filterByType(type) {
  return {
    type: FILTER_BY_TYPE,
    payload: type,
  };
}

export function filterByCreator(payload) {
  return {
    type: FILTER_BY_CREATOR,
    payload: payload,
  };
}

// Order

export function orderPokemon(type) {
  if (type === "asc") {
    return {
      type: ORDER_ASCENDING,
    };
  }
  if (type === "desc") {
    return {
      type: ORDER_DESCENDING,
    };
  }
  if (type === "less") {
    return {
      type: ORDER_ATTACK_DESCENDING,
    };
  }
  if (type === "more") {
    return {
      type: ORDER_ATTACK_ASCENDING,
    };
  }
}
