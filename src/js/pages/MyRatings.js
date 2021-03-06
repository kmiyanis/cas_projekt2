import firebase, { auth, provider } from '../fire.js';
import React from "react";
import { Link, Redirect } from "react-router";
import { connect } from "react-redux"

import OrderTable from "../components/OrderTable";
import * as userActions from "../actions/userActions"
import { fetchRatingsByUser, deleteRating } from '../actions/recipesActions';
import RatingTable from "../components/RatingTable";

@connect((store) => {
  return {
    ratings: store.recipes.ratings,
    fetched: store.recipes.fetched,
    user: store.user.user,
    loggedin: store.user.loggedin,
  };
})

export default class MyRatings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.dispatch(fetchRatingsByUser(user.email))
      }
    });
  }

  handleClick(_id) {
    this.props.dispatch(deleteRating(_id));
  }

  render() {
    const {
      ratings,
      fetched,
      user,
      loggedin
    } = this.props;

    let renderedRatings = [];
    if (ratings != null) {
      Object.keys(ratings).map(function (key) {
        renderedRatings.push(<RatingTable rating={ratings[key]} _id={key} key={key} admin={true} onClick={() => this.handleClick(key)} />)
      }.bind(this))
    }

    if (fetched) {
      if (renderedRatings.length > 0) {
        return (
          <div>
            <h1 class="title">Meine Bewertungen</h1>
            {renderedRatings}
          </div>
        )
      } else {
        return (
          <div>
            <h1 class="title">Meine Bewertungen</h1>
            <div class="content content--bg-white"><p>Bisher noch keine Bewertungen abgegeben</p></div>
          </div>
        )
      }
    } else {
      return (
        <div>
          <h1 class="title">Meine Bewertungen</h1>
          <div class="content content--bg-white"><p>Loading...</p></div>
        </div>
      )
    }
  }
}
