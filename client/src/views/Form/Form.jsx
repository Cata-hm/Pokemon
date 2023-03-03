import axios from "axios";
import { useState } from "react";
import validate from "../../middleware/validate";
import styles from "./Form.module.css";
import { useSelector } from "react-redux";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validate({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://pokemon-api-c72r.onrender.com/pokemons", form)
      .then((res) => alert("Pokemon creado!"))
      .catch((err) => alert(err));
  };

  const types = useSelector((state) => state.pokemonTypes);

  return (
    <div className={styles.containerCreate}>
      <form action="POST" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.separate}>
          <label className={styles.label} htmlFor="">
            Name:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write name"
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Life:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write life"
            type="text"
            value={form.life}
            onChange={changeHandler}
            name="life"
          />
          {errors.life && <span>{errors.life}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Attack:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write attack"
            type="text"
            value={form.attack}
            onChange={changeHandler}
            name="attack"
          />
          {errors.attack && <span>{errors.attack}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Defense:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write defense"
            type="text"
            value={form.defense}
            onChange={changeHandler}
            name="defense"
          />
          {errors.defense && <span>{errors.defense}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Speed:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write speed"
            type="text"
            value={form.speed}
            onChange={changeHandler}
            name="speed"
          />
          {errors.speed && <span>{errors.speed}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Heigth:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write height"
            type="text"
            value={form.height}
            onChange={changeHandler}
            name="height"
          />
          {errors.height && <span>{errors.height}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Weigth:{" "}
          </label>
          <input
            className={styles.input}
            placeholder="Write weight"
            type="text"
            value={form.weight}
            onChange={changeHandler}
            name="weight"
          />
          {errors.weight && <span>{errors.weight}</span>}
        </div>

        <div>
          <label className={styles.label} htmlFor="">
            Types:{" "}
          </label>
          <select
            className={styles.input}
            placeholder="Choose a type"
            type="text"
            value={form.types}
            onChange={changeHandler}
            name="types"
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
          {errors.types && <span>{errors.types}</span>}
        </div>
        <button className={styles.Submmit} type="submmit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
