import React from "react"
import { Link } from "react-router";
import { connect } from "react-redux"
import ReactStars from 'react-stars'

import { fetchRecipe, addRating, fetchRatings } from "../actions/recipesActions"
import * as userActions from "../actions/userActions"
import RatingTable from "../components/RatingTable";

@connect((store) => {
  return {
    recipe: store.recipes.recipe,
    recipesFetched: store.recipes.fetched,
    user: store.user.user,
    loggedin: store.user.loggedin,
    ratings: store.recipes.ratings,
    ratingSuccessfull: store.recipes.pushed,
  };
})

export default class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'Bitte geben Sie eine Bewertung ab.',
      star: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ratingChanged(star) {
    this.setState({ star: star })
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(slug) {
    return event => {
      event.preventDefault()
      const rating = {
        createdAt: Date.now(),
        ...this.state,
        slug: slug,
        email: this.props.user.email,
        name: this.props.user.displayName,
      }
      this.props.dispatch(addRating(rating));
    }
  }


  componentWillMount() {
    this.props.dispatch(fetchRecipe(this.props.params.recipe))
    this.props.dispatch(fetchRatings(this.props.params.recipe))
    this.props.dispatch(userActions.fetch())
  }

  loginHandler() {
    this.props.dispatch(userActions.login());
  }

  render() {
    const { recipe, recipesFetched, user, loggedin, ratings } = this.props;

    let renderedRatings = []
    Object.keys(ratings).map(function (key) {
      renderedRatings.push(<RatingTable rating={ratings[key]} key={key} />)
    })

    if (renderedRatings.length === 0) {
      renderedRatings = 'Bisher keine Bewertungen abgegeben';
    }

    return (
      <div>
        <h1 class="title">{recipe.name}</h1>
        <div class="content content--bg-white grid">
          {recipe && recipe.steps && recipe.steps.map((step, i) =>
            <div class="content__row" key={i}>
              <div class="content__img-col">
                <img src={step.img} alt="" />
              </div>
              <div class="content__text-col" dangerouslySetInnerHTML={{ __html: step.txt }}></div>
            </div>
          )}
        </div>
        <br /><br /><br />
        <div class="content content--bg-white grid">
          {renderedRatings}
        </div>
        <br /><br /><br />
        {this.props.ratingSuccessfull &&
          <div class="content content--bg-green grid">
            Vielen Dank für Ihre Bewertung!
          </div>
        }
        <div class="content content--bg-white grid">
          {loggedin && user ?
            <form onSubmit={this.handleSubmit(recipe.slug)}>
              <ReactStars
                half={false}
                count={5}
                onChange={this.ratingChanged.bind(this)}
                size={24}
                color2={'#ffd700'}
                name="star"
                value={this.state.star}
              />
              <br /><br />
              <textarea name="txt" value={this.state.txt} onChange={this.handleChange} />
              <br /><br />
              <input type="submit" value="Bewertung abschicken" />
            </form>
            :
            <button class="checkout__login" onClick={() => this.loginHandler(this.props)}><em>Für eine Bewertung bitte anmelden</em></button>
          }
        </div>
      </div>
    );
  }
}
