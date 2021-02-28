import '../App.css';
import React, {useEffect, useState} from "react";


//tab "npm install jsonpath" to install jsonpath

function RecipeViewer(props){
  
  const [recipes, setRecipes] = useState(['']);
  const [ingredients, setIngredients] = useState(['']);
  const [titles, setTitles]= useState('');
  const recipeID = props.value;

  console.log(props);
  
  
  const API_KEY = "f68b25508afb44839b972812b2100a2c";   //1
  const API_KEY2 = "22b6eeaef6fd4028a65f667f11c51b6f";  //2
  const API_KEY3 = "a0aa504c7dc24dbaa141bbe9fe4ebf12";  //3
  const API_KEY4 = 'b8a76a23b68d46eea08c16359df3cd34';  //ie
  const API_KEY5 = 'af25f7ba83274e5b8f134dcb92ce6c7c';  //je
  const API_KEY6 = 'c85570478e774107b7c61e1703f2ba16'; //mumail
 
  
  const image = "https://spoonacular.com/recipeImages/"+recipeID+"-312x231.jpg"
  
  useEffect(() => {getRecipes()},[]);
  useEffect(() => { getIngredients()},[]);
  useEffect(()=>{getTitle()},[]);

  


  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/analyzedInstructions?apiKey=${API_KEY3}`
    );
    const data = await response.json();
    setRecipes(data[0].steps);
    //console.log(data);
    
  };
  const getIngredients = async () =>{
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/ingredientWidget.json?apiKey=${API_KEY3}`
    );
    const data = await response.json();
    setIngredients(data.ingredients);
    //console.log(data);
  }
  
  var jp = require('jsonpath');
  var amount = jp.query(ingredients, '$..us.*');

  const value_unit = amount.reduce(function (value_unit, key, index) { 
    return (index % 2 == 0 ? value_unit.push([key]) 
      : value_unit[value_unit.length-1].push(key)) && value_unit;
  }, []);

  const getTitle = async () =>{
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY3}`
    );
    const data = await response.json();
    setTitles(data.title);
  }

  //console.log(rows);


  return(
    <div className = "recipe_container">
      <div className = "recipe_header">
        <div className="recipe_title">
          {titles}
          </div><div className = 'recipe_img'><img src = {image} alt = "" /></div>
      </div>

      <div className = "recipe_content">
        <h2>Instruction</h2>
        <ol>{recipes.map((recipe) => { return( <li className="recipe_instruction_padding">{recipe.step}</li> ) })}  </ol>  
      
          <div className = "recipe_ing_name">
           <h2>Required ingredients</h2>
            {ingredients.map((ingredient) => { return ( <li> {ingredient.name}</li> ) })}  
          </div>

          <div className = "recipe_ing_amount"> 
            <h2>Amount</h2>
            {value_unit.map((amount)=>{return(<li>{amount}</li>)})}  
          </div>
      </div>
    </div>
    
  );
};

export default RecipeViewer;

