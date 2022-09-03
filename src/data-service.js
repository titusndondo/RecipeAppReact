import getData from "./InMemoryDatabase";

export default class DataService {
    data;
    constructor() {
        this.data = getData();
    }

    getRecipes() {
        return this.data;
    }

    getRecipeById(id) {
        return this.data.find(recipe => recipe.id === id)
    }
}