const axios = require('axios');
const{ Pokemon, Type } = require('../db')

const getAllPokemons=async()=>{
  const pokemonApi = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150');

  const pokemonApiUrl = pokemonApi.data.results.map((element) => axios.get(element.url));

  const pokemonData = await Promise.all(pokemonApiUrl);

  return pokemonData.map((pokemon) => pokemon.data);
  
   const pokeDB= await Pokemon.findAll({include:Type})

   
   const dataFromDB = pokeDB?.map((element) => {
    return {
       id: element.id,
       name:
       element.name.trim().toLowerCase().charAt(0).toUpperCase() +
       element.name.substring(1), //me traigo el name con el fin de que quede asi = EJEMPLO: "cata" -> "Cata"
       life: element.life,
       attack: element.attack,
       defense: element.defense,
       speed: element.speed,
       height: element.height,
       weight: element.weight,
       Types: element.Types.map((index) => {
        return {name:index.name};
      }), 
       image: element.image,
       create: true,
    }
  });
   
   const pokemonApiInfo = await axios.all(pokemonApiUrl);
   
   const apiData = pokemonApiInfo.map((element) => {
       const pokemon = element.data
       const object = {
         id: pokemon.id.toString(),
         name: pokemon.name.toLowerCase(),
         life: pokemon.stats[0].base_stat,
         attack: pokemon.stats[1].base_stat,
         defense: pokemon.stats[2].base_stat,
         speed: pokemon.stats[5].base_stat,
         height: pokemon.height,
         weight: pokemon.weight,
         image: pokemon.sprites.other['dream_world'].front_default,
         image2: pokemon.sprites.other['official-artwork'].front_default,
         image3: pokemon.sprites.other['home'].front_default,
         Types: pokemon.types.map((type) => {
             return { name: type.types.name };
           }),
         create: false
       }
      return object
       
     });

     //__________________CONCATENATE apiData WITH dataFromDB______________________________
     
     const allPokemons=apiData.concat(dataFromDB);
     return allPokemons;
}
  
module.exports= { getAllPokemons };