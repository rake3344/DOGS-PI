const { Dog, Temperament } = require("../db");

const getDogsDb = async (req, res) => {
  try {
    const dogs = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json({ error: "No dogs found" });
  }
};

module.exports = getDogsDb;
