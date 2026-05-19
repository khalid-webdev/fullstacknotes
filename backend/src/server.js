require("dotenv").config({ quiet: true });
const app = require("./index");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb is connected!");
    app.listen(PORT, () =>
      console.log(`server is listening on localhost:${PORT}......`),
    );
  })
  .catch((err) => console.log("Connetion failed !", err));
