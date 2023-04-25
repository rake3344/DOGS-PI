const { mixed } = require("./apiData");

const getDogs = async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await mixed();
    if (name) {
      const dog = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      dog.length
        ? res.status(200).json(dog)
        : res.status(404).send({ message: "No dog found" });
    } else {
      res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogs;
