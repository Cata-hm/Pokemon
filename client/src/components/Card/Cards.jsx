import styles from "./Card.module.css";

const Card = ({ name, life, image }) => {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.h2}>{name}</h2>
        <p className={styles.p}>Life:{life}</p>
        <img
          className={styles.img}
          src={image}
          width="150"
          height="150"
          alt="img"
        />
      </div>
    </>
  );
};

export default Card;
