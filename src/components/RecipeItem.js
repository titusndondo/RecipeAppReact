import './RecipeItem.css'

function RecipeItem(props) {
    const recipe = props.recipe;

    return (
        <div onClick={() => props.onItemSelected(recipe.id)} className="card recipe-card margin-2">
            <div className="d-flex flex-row border border-0">
                <img src={ recipe.imageURL } className="card-img-top img-fluid rounded recipe-img" alt={ recipe.name }></img>
                <div className="card-body">
                    <h5 className="card-title">{ recipe.name }</h5>
                    <p className="card-text">{ recipe.steps.join(' ').slice(0, 35) }...</p>
                    <p className="text-muted fw-light">Last updated: { recipe.date }</p>
                </div>
            </div>
        </div>

    )
}

export default RecipeItem;