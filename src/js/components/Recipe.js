import React from "react";
import { Link } from "react-router";

export default class Recipe extends React.Component {
  render() {
    const { name, img, slug } = this.props;
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <Link to={"/recipe/" + slug}><img class="card-img-top" src={img} alt="" /></Link>
          <div class="card-body">
            <h4 class="card-title">
              <Link to={"/recipe/" + slug}>{name}</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
