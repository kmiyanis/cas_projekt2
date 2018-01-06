import React from "react";
import { Link } from "react-router";
import ReactStars from 'react-stars'

export default class Recipe extends React.Component {
  render() {
    const { name, img, slug, avgRating } = this.props;
    return (
      <div class="grid__item">
        <Link to={"/recipe/" + slug}>
          <div class="grid__img-box"><img class="grid__img" src={img} alt={name} /></div>
        </Link>
        <div class="grid__text-block">
          <h2 class="grid__title">
            <Link to={"/recipe/" + slug}>{name}</Link>
          </h2>
          <br /><br />
          <ReactStars
            count={5}
            size={24}
            color2={'#ffd700'}
            value={avgRating}
            edit={false}
          />
        </div>
      </div>
    );
  }
}

