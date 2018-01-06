import React from "react";
import ReactStars from 'react-stars'
import { deleteRating } from '../actions/recipesActions';

export default class RatingTable extends React.Component {
  handleClick() {
    console.log('aa')
  }
  render() {
    var divStyle = {
      marginBottom: '1rem',
      borderBottom: '1px solid #000',
      width: '100%'
    };

    const { rating, admin } = this.props;

    return (
      <div class="checkout-content myratings" style={divStyle}>
        {rating.name}
        <br />
        am &nbsp;{Date(rating.created_at).toString()}
        <br /><br />
        <ReactStars
          count={5}
          size={24}
          color2={'#ffd700'}
          value={rating.star}
          edit={false}
        />
        <br />
        Bewertung: {rating.txt}
        {admin && 
          <div class="edit-actions">
            <hr />
            <button class="checkout__login" onClick={this.props.onClick}><em>Bewertung löschen</em></button>
          </div>
        }
      </div>
    );
  }
}