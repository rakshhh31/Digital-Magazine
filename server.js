// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/digital-magazine", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MagazineSchema = new mongoose.Schema({
  title: String,
  coverImage: String,
  content: String,
});

const Magazine = mongoose.model("Magazine", MagazineSchema);

// Get all magazines
app.get("/magazines", async (req, res) => {
  const magazines = await Magazine.find();
  res.json(magazines);
});

// Add a new magazine
app.post("/magazines", async (req, res) => {
  const magazine = new Magazine(req.body);
  await magazine.save();
  res.json({ message: "Magazine added!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
