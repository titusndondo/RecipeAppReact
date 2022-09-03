import RecipeItem from "./RecipeItem";

function RecipesList(props) {

    return (
      props.recipes.map(recipe => {
          return <div className="mb-3">
              <RecipeItem
                  key={recipe.id}
                  recipe={recipe}
                  onItemSelected={props.onItemSelected}></RecipeItem>
          </div>
      })
    )
}

export default RecipesList;