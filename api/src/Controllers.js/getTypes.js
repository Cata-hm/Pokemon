const axios = require("axios");
const { Type } = require("../db")

const url = "https://pokeapi.co/api/v2/type"

const getAllTypes = async ()=> {
        const get = await axios.get(url)
        const data = get.data.results.map(element => {return {name:element.name}})
        data.forEach( async element => {
            const type = await Type.findOrCreate({
                where:{
                    name: element.name
                }
            })
        })
        return Type.findAll()
};

module.exports = getAllTypes;