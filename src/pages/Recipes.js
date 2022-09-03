import { useState } from "react";
import RecipeDetail from "../components/RecipeDetail";
import RecipesList from "../components/RecipesList";
import DataService from "../data-service";
import Button from "../shared/Button";
import './Recipes.css'

function Recipes() {
    const recipes = new DataService().getRecipes();

    const [selectedRecipe, setSelectedRecipe] = useState(undefined)
    
    const onItemSelected = (id) => {
        console.log(id)
        const recipe = new DataService().getRecipeById(id)
        setSelectedRecipe(recipe)
    }

    return (
        <div className="my-5">
            <div className="row mb-3">
                <Button name="New Recipe"></Button>
            </div>
            <div className="row">
                <div className="col-5">
                    <RecipesList recipes={recipes} onItemSelected={onItemSelected}></RecipesList>
                </div>
                <div className="col btn-stick">
                    <RecipeDetail recipe={selectedRecipe}></RecipeDetail>
                </div>
            </div>
        </div>
  );
}

export default Recipes;
