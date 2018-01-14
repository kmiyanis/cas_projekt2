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
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
      }
      this.props.dispatch(addRating(rating));
    }
  }


  componentWillMount() {
    this.props.dispatch(fetchRecipe(this.props.params.recipe))
    this.props.dispatch(fetchRatings(this.props.params.recipe))
  }

  loginHandler() {
    this.props.dispatch(userActions.login());
  }

  render() {
    const { recipe, recipesFetched, user, loggedin, ratings } = this.props;

    let renderedRatings = []
    if (ratings && recipesFetched) {
      Object.keys(ratings).map(function (key) {
        renderedRatings.push(<RatingTable rating={ratings[key]} key={key} />)
      })
    } else {
      renderedRatings = 'Bisher keine Bewertungen abgegeben';
    }

    return (
      <div>
        <h1 class="title">{recipe.name}</h1>
        <div class="content content--bg-white">
          {recipe && recipe.steps && recipe.steps.map((step, i) =>
            <div class="content__row" key={i}>
              <div class="content__img-col">
                <img src={step.img} alt="" />
              </div>
              <div class="content__text-col" dangerouslySetInnerHTML={{ __html: step.txt }}></div>
            </div>
          )}
        </div>
        <br /><br />
        <div class="content content--bg-white">
          {renderedRatings}
        </div>
        <br />
        {this.props.ratingSuccessfull &&
          <div class="content content--bg-green">
            Vielen Dank für Ihre Bewertung!
          </div>
        }
        <div class="content content--bg-white">
          {loggedin && user ?
            <form onSubmit={this.handleSubmit(recipe.slug)}>
              <ReactStars
                half={false}
                count={5}
                onChange={this.ratingChanged.bind(this)}
                size={16}
                color2={'#ffd700'}
                name="star"
                value={this.state.star}
              />
              <br /><br />

              <textarea name="txt" rows="4" class="textarea" placeholder={this.state.star == 0 ? this.state.txt : ''} value={this.state.star == 0 ? '' : this.state.txt} onChange={this.handleChange} />
              <br /><br />
              <div class="input-checkout-btn-wrap">
                <input type="submit" class="input-checkout-btn" value="Bewertung abschicken"/>
              </div>
            </form>
            :
            <button class="checkout__login" onClick={() => this.loginHandler(this.props)}><em>Für eine Bewertung bitte anmelden</em></button>
          }
        </div>
      </div>
    );
  }
}
