//__________FUNCTION TO VALIDATE THE DATA ENTRY IN THE POST_______________________________________________________

const postValidate = (req, res, next) => {
    const {name, life, attack, defense, speed, height, weight, types} = req.body;
    if (!name) return res.status(400).json({ error: "Missing name!"});
    if (!life) return res.status(400).json({ error: "Missing life!"});
    if (!attack) return res.status(400).json({ error: "Missing attack!"});
    if (!defense) return res.status(400).json({ error: "Missing defense!"});
    if (!speed) return res.status(400).json({ error: "Missing speed!"});
    if (!height) return res.status(400).json({ error: "Missing height!"});
    if (!weight) return res.status(400).json({ error: "Missing weight!"});
    if (!types) return res.status(400).json({ error: "Missing types!"});
  
    next();
  }

  module.exports = { postValidate };