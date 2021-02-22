import React, {useState} from "react";
import axios from "axios";


function ShareRecipes() {   
    const[input, setInput]= useState({
        textMeal:'',
        textInstructions:'',
        textIngredients:''

    })

    function handleChange(event){
        
        const {name, value}= event.target;

        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event){
        
        event.preventDefault();

    
        const newRecipe = {
            textMeal: input.textMeal,
            textInstructions: input.textInstructions,
            textIngredients: input.textIngredients

        }
        axios.post('http://localhost:3001/create', newRecipe); 
        
    }
    return <div className = 'container'>
      <h1>Share your recipes!</h1>
      <form>
          <div className = 'form-group'>
              <input onChange={handleChange} name="textMeal" value={input.textMeal} autoComplete="off" className="form-control"  placeholder="Meal name"></input>
          </div>

          <div className = 'form-group'>
            <textarea  onChange={handleChange} name="textInstructions" value={input.textInstructions} className = "form-control" cols="30" rows="10" autoComplete="off" placeholder="Instructions"></textarea>
        </div>
        <div className = 'form-group'>
            <textarea onChange={handleChange} name="textIngredients" value={input.textIngredients} className = "form-control" cols="30" rows="10" autoComplete="off" placeholder="Ingredients" ></textarea>    
        </div>

        <button onClick = {handleClick}>Share</button>    
      </form>
    </div>
}
export default ShareRecipes;