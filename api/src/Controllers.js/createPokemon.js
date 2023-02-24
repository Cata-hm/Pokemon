// const { Op } = require("sequelize");
// const { Pokemon, Type } = require("../db");

// // Function to create an object for the new Dog
// const createPokemon = async (body) => {
//   const {
//     Types
//   } = body;

//   const newPokemon = await Pokemon.create({
//     ...body,
//     createdInDb : true,
//   });
  
//   console.log(await newPokemon)
//   const concatModels = await Type.findAll({ where: {id: {[Op.in]: Types}}});
//   newPokemon.addTypes(concatModels);
//   return newPokemon;
// };

//__________________________________________

// const { Pokemon, Type } = require("../db");

// const createPokemon = async (body) => {
//     const { name, life, attack, defense, speed, height, weight, Types } = body;
      
//     const newPokemon = await Pokemon.create({
//       name: name,
//       life: life,
//       attack: attack,
//       defense: defense,
//       speed: speed,
//       height: height,
//       weight: weight,
//       Types: Types,
//     });

//     // Add all types to the new Pokemon
//     const allTypes = await Type.findAll({ where: { Types: name } });
//     await newPokemon.addTypes(allTypes);

//     return newPokemon;
// };

// module.exports = createPokemon;
//__________________________________________________________________________

const { Pokemon, Type } = require("../db");

const createPokemon = async (body)=>{
        const {name, life, attack, defense, speed, height, weight, types} = body
        const newPokemon = await Pokemon.create({
            name: name, 
            life: life, 
            attack: attack, 
            defense: defense, 
            speed: speed, 
            height: height, 
            weight: weight, 
        });

        const allTypes = await Type.findOne({ where: { name: types } });
        await newPokemon.addType(allTypes);
    
        return newPokemon;
        
}

module.exports = createPokemon; 

