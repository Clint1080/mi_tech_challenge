const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Controllers
const controller = require("./controllers/controller");

app.get("/", controller.getCardInfo);

app.listen(3001, () => console.log("server is running on 3001"));
