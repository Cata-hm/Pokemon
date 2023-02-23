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
        
        types.forEach(async element => {
            const typesDB = await Type.findOne({  
                where: { name : element.name}   
            })
            await newPokemon.addType(typesDB)  
        });
        return newPokemon;
}

module.exports = createPokemon; 

