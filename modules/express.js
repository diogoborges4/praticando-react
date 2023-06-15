const express = require("express");
const UserModel = require("../modules/src/models/user.model");
const Photo = require("../modules/src/models/Photo.js");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const {storage} = require("./src/middlewares/PhotoUploads")

const uploads = multer({ storage: storage });

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/home", uploads.single("file"), async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
});

app.get("/users", uploads.single(""), async (req, res) => {
  try {
    const users = await Photo.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findById(id);

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 5000;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
