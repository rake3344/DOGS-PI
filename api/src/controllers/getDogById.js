const { mixed } = require("./apiData");

const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    const allDogs = await mixed();
    const dog = allDogs.filter((dog) => dog.id === Number(id));
    dog.length
      ? res.status(200).json(dog)
      : res.status(404).json({ message: "No dog found" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogById;
