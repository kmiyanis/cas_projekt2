import React from "react";
import ReactStars from 'react-stars'
import { deleteRating } from '../actions/recipesActions';

export default class RatingTable extends React.Component {
  render() {
    var divStyle = {
      marginBottom: '1rem',
      borderBottom: '1px solid #C42E2E',
      width: '100%'
    };

    const { rating, admin } = this.props;

    return (
      <div class="checkout-content myratings" style={divStyle}>
        {rating.firstname}&nbsp;{rating.lastname}
        <br />
        am &nbsp;{new Date(rating.createdAt).toDateString()}
        <br /><br />
        <ReactStars
          count={5}
          size={16}
          color2={'#ffd700'}
          value={rating.star}
          edit={false}
        />
        <br />
        Bewertung: {rating.txt}
        {admin && 
          <div class="edit-actions">
            <button class="checkout__login" onClick={this.props.onClick}><em>Bewertung löschen</em></button>
          </div>
        }
      </div>
    );
  }
}