import React from "react"
import { connect } from "react-redux"

import Recipe from "../components/Recipe";
import * as fetchRecipes from "../actions/recipesActions"

@connect((store) => {
	return {
		recipes: store.recipes.recipes,
		recipesFetched: store.recipes.fetched,
	};
})

export default class Recipes extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchRecipes.fetchFeaturedRecipes())
	}

	render() {
		const { recipes, fetched, params } = this.props;

		const mappedRecipes = recipes.map((recipe, i) => {
			return <Recipe key={i} {...recipe} />;
		});

		return (
			<div>
				<h1>Infobox</h1>
				{fetched ? (
					"Loading..."
				) : (
					<div class="row">{mappedRecipes}</div>
				)}
			</div>
		);

	}
}