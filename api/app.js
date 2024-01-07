const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;

try {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/cinema";
  const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connect");
    saveData();
  });
} catch (error) {
  throw new Error();
}

const filmSchema = new mongoose.Schema({
  judul: String,
  tahun: Number,
});

const Film = mongoose.model("Film", filmSchema);

const saveData = async () => {
  try {
    const count = await Film.estimatedDocumentCount();
    console.log(count);
    if (count === 0) {
      const data = new Film({
        judul: "Thor",
        tahun: 2018,
      });
      await data.save();
      console.log("Data iitialy");
    }
  } catch (error) {
    throw new Error();
  }
};

app.use(cors());

app.get("/movies", async (req, res) => {
  const data = await Film.find();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
