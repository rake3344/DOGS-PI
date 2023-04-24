const axios = require("axios");
const { Temperament } = require("../db.js");
const { API_KEY } = process.env;

const url = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getTemperaments = async (req, res) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    const temperaments = data.map((dog) => dog.temperament);
    const temp = temperaments.toString().split(",");
    temp.forEach((tem) => {
      const i = tem.trim();
      Temperament.findOrCreate({
        where: {
          name: i,
        },
      });
    });
    const allTemperaments = await Temperament.findAll();
    res.status(200).send(allTemperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTemperaments;
