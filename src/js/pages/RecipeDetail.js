import React from "react"
import {connect} from "react-redux"

import {fetchRecipe} from "../actions/recipesActions"

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
        const {recipe, recipesFetched} = this.props;

        return (
            <div>
                <h1 class="title">{recipe.name}</h1>
                <div class="content content--bg-white grid">
                    {recipe && recipe.steps && recipe.steps.map((step, i) =>
                        <div class="content__row" key={i}>
                            <div class="content__img-col">
                                <img src={step.img} alt=""/>
                            </div>
                            <div class="content__text-col" dangerouslySetInnerHTML={{__html: step.txt}}></div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}