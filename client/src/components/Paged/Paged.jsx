import React from "react";
import styles from "./Paged.module.css";

export default function Pagination({
  pokemonPerPage,
  Pokemons,
  paged,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(Pokemons / pokemonPerPage); i++) {
    pageNumber.push(i);
  }

  const totalPages = Math.ceil(Pokemons / pokemonPerPage);

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  if (currentPage > totalPages) previousPage();

  return (
    <div className={styles.container}>
      <button className={styles.btnPrimaryPrevious} onClick={previousPage}>
        Previous page
      </button>
      <ul className={styles.li}>
        {pageNumber &&
          pageNumber.map((number) => (
            <div className={styles.ul}>
              <button
                className={styles.buttonPages}
                key={number}
                onClick={() => paged(number)}
              >
                {number}
              </button>
            </div>
          ))}
      </ul>
      <button className={styles.btnPrimaryNext} onClick={nextPage}>
        Next page
      </button>
      <div className={styles.h4}>
        <h4>
          {currentPage} / {totalPages}
        </h4>
      </div>
    </div>
  );
}
