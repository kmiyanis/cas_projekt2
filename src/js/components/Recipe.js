import React from "react";
import {Link} from "react-router";

export default class Recipe extends React.Component {
    render() {
        const {name, img, slug} = this.props;
        return (
            <div class="grid__item">
                <Link to={"/recipe/" + slug}>
                    <div class="grid__img-box"><img class="grid__img" src={img} alt={name}/></div>
                </Link>
                <div class="grid__text-block">
                    <h2 class="grid__title">
                        <Link to={"/recipe/" + slug}>{name}</Link>
                    </h2>
                </div>
            </div>
        );
    }
}

