const { Router } = require("express");
const getDogs = require("../controllers/getDogs.js");
const getTemperaments = require("../controllers/getTemperaments.js");
const getDogById = require("../controllers/getDogById.js");
const postDog = require("../controllers/postDog.js");
const dogsDb = require("../controllers/dogsDb.js");
const router = Router();

router.get("/dogs", getDogs);
router.get("/temperaments", getTemperaments);
router.get("/dogs/:id", getDogById);
router.post("/dogs", postDog);
router.get("/dogsDb", dogsDb);

module.exports = router;
