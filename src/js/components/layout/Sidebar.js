import React from "react";
import { connect } from "react-redux"

import { IndexLink, Link } from "react-router";
import { fetchCategories } from "../../actions/productsActions"

import Cart from '../Cart';

@connect((store, props) => {
    return {
        categories: store.products.categories,
        categoriesFetched: store.products.fetched,
    };
})
export default class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    filterCat(c) {
        alert('filter by ' + c.name)
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    componentWillMount() {
        this.props.dispatch(fetchCategories())
    }

    render() {
        const { categories, fetched } = this.props;
        const SiderbarLinks = categories.map((c) => <a onClick={() => this.filterCat(c)} class="filternav__item" key={c._id}>{c.name}</a>);
        return (

            <div class="filternav">
                <span class="filternav__title">Anzeige: </span>
                <a class="filternav__item checked" href="">Alle</a>
                    {SiderbarLinks}

            </div>
        );
    }
}
