const getAllTypes = require("../Controllers.js/getTypes");

//__________FUNCTION TO GET ALL TYPES (GET: /types)_________________________
const getTypes = async (req, res) => {
    try{
        const typesTotal = await getAllTypes();
        res.status(200).json(typesTotal)
    }catch{
        res.status(400).send("Type not found")
    }
};

module.exports = getTypes;