require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const app = express();
app.use(cors());
app.use(express.json());

/* MAILGUN CONFIGURATION */
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "Jonathan VALERE",
  key: process.env.API_KEY_MAILGUN,
});

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Welcome" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/form", async (req, res) => {
  try {
    // console.log(req.body);
    const { firstname, lastname, email, message } = req.body;

    const messageData = {
      from: `${firstname} ${lastname} <${email}>`,
      to: process.env.MAIL_TO,
      subject: `Formulaire JS - Trip`,
      text: message,
    };

    const response = await client.messages.create(
      process.env.DOMAINE_NAME_MAILGUN,
      messageData
    );

    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log("dans la partie catch");
    res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server on fire 🔥");
});
