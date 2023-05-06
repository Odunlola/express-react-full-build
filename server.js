///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;//process .env is an object{PORT:400}
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");const peopleRouter = require('./controllers/people')

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies (as sent by API clients)
app.use('/people', peopleRouter)

///////////////////////////////
// ROUTES
////////////////////////////////
app.get("/", (req, res) => {
    res.send("hello world");
  });
  app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));