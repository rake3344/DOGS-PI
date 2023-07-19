const app = require("./src/app.js");
const { conn } = require("./src/db.js");
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
