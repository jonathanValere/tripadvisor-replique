require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/form", async (req, res) => {
  try {
    // const { firstname, lastname, email, message } = req.body;
    console.log(req.body);
    res.status(200).json({ message: "envoyé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server on fire 🔥");
});
