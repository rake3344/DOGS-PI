const { Dog, Temperament } = require("../db");

const postDogs = async (req, res) => {
  try {
    const {
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      temperaments,
      life_span,
      image,
    } = req.body;
    const heightTotal = [];
    heightTotal.push(min_height, max_height);

    const weightTotal = [];
    weightTotal.push(min_weight, max_weight);

    const dog = await Dog.create({
      name: name,
      height: heightTotal,
      weight: weightTotal,
      life_span,
      image: image
        ? image
        : "https://img.freepik.com/vector-premium/adorable-perro-sentado-dibujos-animados_74769-13.jpg",
    });

    const temperament = await Temperament.findAll({
      where: {
        name: temperaments,
      },
    });

    dog.addTemperament(temperament);

    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDogs;
