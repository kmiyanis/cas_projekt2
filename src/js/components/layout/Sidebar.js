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
            collapsed: true
        };
    }
/*
    filterCat(c) {
        alert('filter by ' + c.name)
        this.setState({filter: c.name});
    }*/

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    componentWillMount() {
        this.props.dispatch(fetchCategories())
    }

    isCat(catname) {
        let re = new RegExp(catname);
        let hasCat = location.hash.match(re) ? " checked" : "";
        console.log('hasCat',hasCat);
       return hasCat;
    }
    render() {
        const { categories, fetched } = this.props;
      //  const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
        //const SiderbarLinks = categories.map((c) => <a onClick={() => this.filterCat(c)} class="filternav__item" key={c._id}>{c.name}</a>);
        const SiderbarLinks = categories.map(
            (c) => <Link to={"/shop/" + c._id}
                         class={"filternav__item" + this.isCat(c._id)}
                         key={c._id}>{c.name}</Link>);
        return (

            <div class="filternav">
                <span class="filternav__title">Anzeige: </span>
                <Link to={"/shop/"} class={"filternav__item" }>Alle</Link>
                    {SiderbarLinks}

            </div>
        );
    }
}
