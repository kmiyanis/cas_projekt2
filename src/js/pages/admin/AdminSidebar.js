import React from "react";
import {connect} from "react-redux"

import {IndexLink, Link} from "react-router";
import {fetchCategories} from "../../actions/productsActions"

@connect((store, props) => {
  return {
    categories: store.products.categories,
    categoriesFetched: store.products.catFetched,
  };
})
export default class AdminSidebar extends React.Component {
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
    let _location = this.props.location.pathname.split('/admin/products/');
    let rgxp = new RegExp(catname);
    let isActive = '';

    if(_location.length <= 1) {
        isActive = catname === 'all' ? " checked" : "";
    } else {
      isActive = (catname === 'all' && ( _location[1] === '')) ? " checked" : _location[1].match(rgxp) ? " checked" : "";
    }

    return isActive;
  }

  render() {
    const {location, categories, categoriesFetched} = this.props;

    if(!categories || !categoriesFetched) {
      return <p class="message-loader">Loading...</p>;
    }
    const SiderbarLinks = categories.map(
      (c) => <Link to={"/admin/products/" + c._id}
                   class={"filternav__item" + this.setActiveClass(c._id)}
                   key={c._id}>{c.name}</Link>);
    return (

      <div class="filternav">
        <Link to={"/admin/products/"} class={"filternav__item"  + this.setActiveClass('all')}>Alle</Link>
        {SiderbarLinks}

      </div>
    );
  }
}