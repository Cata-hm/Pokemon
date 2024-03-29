import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
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
    if (element.target.value === "alph" || element.target.value === "attack")
      return;
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
    if (element.target.value === "false")
      dispatch(filterByCreator(element.target.value));
    if (element.target.value === "true")
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
      <div>
        <span className="span" onClick={() => setShowFilterBar(true)}></span>
      </div>
    );
  } else {
    return (
      <div className={styles.firstContainer}>
        <div className={styles.filterscontainer}>
          <h4 className={styles.label}>Filter by</h4>
          <div className={styles.divs}>
            <select
              className={styles.input}
              onChange={filterType}
              value={selectType}
            >
              <option value="type">Type</option>
              {types &&
                types.map((type) => {
                  return (
                    <option value={type.name} key={type.id}>
                      {type.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className={styles.divs}>
            <select
              onChange={filterCreator}
              value={selectCreator}
              className={styles.input2}
            >
              <option value="">Source</option>
              <option value="all">All</option>
              <option value="false">Existing</option>
              <option value="true">Created</option>
            </select>
          </div>

          <h4 className={styles.label}>Order by</h4>
          <div className={styles.divs}>
            <select
              onChange={order}
              value={selectOrder}
              className={styles.input}
            >
              <option value="alph">Alphabetical</option>
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>
          <div className={styles.divs}>
            <select
              onChange={order}
              value={selectOrder}
              className={styles.input2}
            >
              <option value="attack">Attack</option>
              <option value="less">Less (-)</option>
              <option value="more">More (+)</option>
            </select>
          </div>

          <div className={styles.divs}>
            <button
              onClick={clearAllFilters}
              className={styles.btnPrimaryClearFilters}
            >
              Clear filters
            </button>
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
