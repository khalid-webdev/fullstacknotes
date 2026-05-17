const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/notes",require("./routes/noteRoutes.js"))



module.exports = app;
