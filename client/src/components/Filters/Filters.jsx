import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPokemonTypes,
  orderPokemon,
  filterByType,
  filterByCreator,
  clearState,
} from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const [showFilterBar, setShowFilterBar] = useState(true);
  const [selectType, setSelectType] = useState("");
  const [selectCreator, setSelectCreator] = useState("");
  const [selectOrder, setSelectOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  const order = (element) => {
    setSelectOrder(element.target.value);
    if (element.target.value === "alph" || element.target.value === "attack") return;
    dispatch(orderPokemon(element.target.value));
  };

  const filterType = (element) => {
    setSelectType(element.target.value);
    if (element.target.value === "type") return dispatch(clearState());
    dispatch(filterByType(element.target.value));
  };

  const filterCreator = (element) => {
    setSelectCreator(element.target.value);
    if (element.target.value === "all") return dispatch(clearState());
    dispatch(filterByCreator(element.target.value));
  };

  const clearAllFilters = () => {
    setSelectType("");
    setSelectCreator("");
    setSelectOrder("");
    dispatch(clearState());
  };

  if (!showFilterBar) {
    return (
      <div className={styles.container}>
        <span className="span" onClick={() => setShowFilterBar(true)}></span>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h4>Filter by</h4>
          <div>
            <select
              onChange={filterType}
              value={selectType}
            >
              <option value="type">Type</option>
              {types &&
                types
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((type) => {
                    return (
                      <option value={type.name} key={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
            </select>
          </div>
          <div>
            <select
              onChange={filterCreator}
              value={selectCreator}
            >
              <option>Source</option>
              <option value="all">All</option>
              <option value="false">Api</option>
              <option value="true">Db</option>
            </select>
          </div>

          <h4>Order by</h4>
          <div>
            <select onChange={order} value={selectOrder}>
              <option value="alph">Alphabetical</option>
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>
          <div>
            <select onChange={order} value={selectOrder}>
              <option value="attack">Attack</option>
              <option value="less">Less (-)</option>
              <option value="more">More (+)</option>
            </select>
          </div>

          <div>
            <button onClick={clearAllFilters}>
              Clear filters
            </button>
          </div>

          <div>
            <Link to="/createpokemon">
              <p>Create</p>
            </Link>
          </div>
        </div>
        <div>
          <span onClick={() => setShowFilterBar(true)}></span>
        </div>
      </div>
    );
  }
};

export default Filters;