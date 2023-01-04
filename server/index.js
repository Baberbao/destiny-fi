require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;
const defiRoutes = require("./routes/defi");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./build"));
app.use("/defi", defiRoutes);
app.use((error, req, res, next) => {
  res.status(500).json({ status: false, data: error });
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
mongoose
  .connect(
    // "mongodb+srv://MajorSaab:Pakistan786@cluster0.38l4q.mongodb.net/?retryWrites=true&w=majority"
    "mongodb+srv://aqib5176:Aqibjutt1@amazon.lfxfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server is Listening on PORT ${PORT}`));
  })
  .catch((error) => {
    console.error(error);
  });
