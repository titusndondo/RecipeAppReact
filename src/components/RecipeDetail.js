import Button from "../shared/Button";
import './RecipeDetail.css'

function RecipeDetail(props) {
    const recipe = props.recipe
    return (
        <div>
            {recipe ?
                <div> 
                    <div className="recipe-image">
                        <img className="image u-margin-top-md" src={recipe.imageURL} alt={recipe.name}></img>
                        <div>
                            <label for="upload-pic">
                                <i className="bi bi-card-image img-icon"></i>
                            </label>
                            <input className="hidden" type="file" name="upload-pic" id="upload-pic"></input>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col">
                            <h2 className="details-header text-center fs-1"> {recipe.name }</h2>
                        </div>
                        <div className="col-1">
                            <Button name="Edit"></Button>
                        </div>
                    </div>
                    <ul className="text-center my-3">
                        {recipe.steps.map(step => {
                            return <li className="recipe-paragraph list-unstyled">{ step }</li>  
                        })}
                    </ul>
                    <div className="my-5">
                        <h3 className="text-center fs-3">Ingredients</h3>
                        <ul className="my-2 mx-5">
                        {recipe.ingredients.map(ingredient => {
                            return <li className="ingredient-item my-2 list-unstyled">
                                <div className="d-flex d-flex-row justify-content-between">
                                    <p className="ingredient-name">
                                        {ingredient.name}
                                    </p>
                                    <span className="ingredient-amount">({ingredient.quantity})         
                                        <i class="bi bi-cart-plus"></i>
                                    </span>
                                </div>
                                <div>
                                </div>
                            </li>
                        })}
                        </ul>
                    </div>
                </div>
                
                :


                <div>Select recipe to view</div>}
    </div>
    )
}

export default RecipeDetail;
