import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import logo from "../../assets/img/International_Pokémon_logo.svg.png";

function Landing() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <img src={logo} className={styles.image} alt="img" />
      </div>

      <div className={styles.content}>
        <div>
          <h1 className={styles.h1}>Welcome to Pokémon world!</h1>
        </div>
        <div className={styles.contentButton}>
          <Link to="/pokemons">
            <button className={styles.btnPrimary}>Get in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
