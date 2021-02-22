const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connest to mongoose
mongoose.connect("mongodb+srv://tester1:tester1@cluster0.gmljl.mongodb.net/recipe")

//require route
app.use("/", require("./routes/recipeRoute"));



