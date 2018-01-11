import React from "react";
import {connect} from "react-redux"

import {IndexLink, Link} from "react-router";
import {fetchCategories} from "../../actions/productsActions"

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

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  componentWillMount() {
    this.props.dispatch(fetchCategories())
  }

  setActiveClass(catname) {
    let _location = this.props.location.pathname.split('/shop/');
    let rgxp = new RegExp(catname);
    let isActive = (catname === 'all' && _location[1] === '') ? " checked" : _location[1].match(rgxp) ? " checked" : "";
    return isActive;
  }

  render() {
    const {location, categories, fetched} = this.props;
    const SiderbarLinks = categories.map(
      (c) => <Link to={"/shop/" + c._id}
                   class={"filternav__item" + this.setActiveClass(c._id)}
                   key={c._id}>{c.name}</Link>);
    return (

      <div class="filternav">
        <Link to={"/shop/"} class={"filternav__item"  + this.setActiveClass('all')}>Alle</Link>
        {SiderbarLinks}

      </div>
    );
  }
}
