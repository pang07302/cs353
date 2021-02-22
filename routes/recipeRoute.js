const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipeModel");

router.route("/create").post((req, res) => {
    const textMeal = req.body.textMeal;
    const textInstructions = req.body.textInstructions;
    const textIngredients = req.body.textIngredients;
    const newRecipe = new Recipe({
        textMeal,
        textInstructions,
        textIngredients
    }); 

    newRecipe.save();
 

})

module.exports = router;