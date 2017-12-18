import React from "react"
import { connect } from "react-redux"

import { fetchRecipe } from "../actions/recipesActions"

@connect((store) => {
  return {
    recipe: store.recipes.recipe,
    recipesFetched: store.recipes.fetched,
  };
})

export default class RecipeDetail extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchRecipe(this.props.params.recipe))
  }

  render() {
    const { recipe, recipesFetched } = this.props;

    return (
      <div>
        <main class="main" role="main">
        <h1 class="title">{recipe.name}</h1>
        {recipe && recipe.steps && recipe.steps.map((step, i) =>
          <div class="row" key={i}>
            <div class="col-lg-3">
              <img src={step.img} alt="" />
            </div>
            <div class="col-lg-9" dangerouslySetInnerHTML={{ __html: step.txt }}></div>
          </div>
        )}
        </main>
      </div>
    );
  }
}