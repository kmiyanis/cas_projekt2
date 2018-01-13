import React from "react";
import { connect } from "react-redux"
import { IndexLink, Link } from "react-router";
import styled from 'styled-components';
import * as userActions from "../../actions/userActions"


@connect((store) => {
  return {
    user: store.user.user,
    loggedin: store.user.loggedin
  };
})
export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  loginHandler() {
    this.props.dispatch(userActions.login());
  }

  logoutHandler() {
    this.props.dispatch(userActions.logout());
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { location, user, loggedin } = this.props;
    const { collapsed } = this.state;
    const indexClass = location.pathname === "/" ? "active" : "";
    const recipesClass = location.pathname.match(/^\/recipes/) ? "active" : "";
    const shopClass = location.pathname.match(/^\/shop/) ? "active" : "";
    const coursesClass = location.pathname.match(/^\/courses/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
    const checkoutClass = location.pathname.match(/^\/checkout/) ? "active" : "";
    // const myorderClass = location.pathname.match(/^\/myorders/) ? "active" : "";
    // const myratingClass = location.pathname.match(/^\/myratings/) ? "active" : "";
    const navClass = collapsed ? "collapsed" : "open";
    const navUlClass = collapsed ? "" : "show";
    const expanded = collapsed ? false : true;

    return (
      <header class="navbar">
        <div class="container">

          <a class="navbar-brand" href="#">MIYA JAPAN TEE</a>
          <button onClick={this.toggleCollapse.bind(this)} class={'navbar-toggler ' + navClass} type="button"
            data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded={expanded} aria-label="Toggle navigation">
            <span class="hamburger__bar1"></span>
            <span class="hamburger__bar2"></span>

          </button>
          <div class={'collapse navbar-collapse ' + navUlClass} id="navbarResponsive">
            <ul class="navbar-nav">
              <li class={"nav-item " + indexClass}>
                <IndexLink class="nav-link" to="/"
                  onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={"nav-item " + shopClass}>
                <Link to="shop" class="nav-link" onClick={this.toggleCollapse.bind(this)}>Shop</Link>
              </li>
              <li class={"nav-item " + recipesClass}>
                <Link to="recipes" class="nav-link"
                  onClick={this.toggleCollapse.bind(this)}>Rezepte</Link>
              </li>
              {/* <li class={"nav-item " + coursesClass}>
                             <Link to="courses" class="nav-link" onClick={this.toggleCollapse.bind(this)}>Kurse</Link>
                             </li> */}
              <li class={"nav-item " + contactClass}>
                <Link to="contact" class="nav-link"
                  onClick={this.toggleCollapse.bind(this)}>Kontakt</Link>
              </li>
              <li class={"nav-item " + checkoutClass}>
                <Link to="checkout" class="nav-link"
                  onClick={this.toggleCollapse.bind(this)}>Warenkorb</Link>
              </li>
              {user ?
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span>
                      <i class="fa fa-user" aria-hidden="true"></i>
                      &nbsp;
                      {user.firstname}
                    </span>
                  </a>

                  <ul class="nav-item__user">
                    <li class="user__item">
                      <a class="user-item__link" href="#"
                        onClick={() => this.logoutHandler(this.props)}>Log Out <span
                          class="user-profile__name">{user.firstname} {user.lastname}</span></a>
                    </li>
                    <li class="user__item">
                      <Link to="/myorders" class="user-item__link"
                        onClick={this.toggleCollapse.bind(this)}>Meine Bestellungen</Link>
                    </li>
                    <li class="user__item">
                      <Link to="/myratings" class="user-item__link"
                        onClick={this.toggleCollapse.bind(this)}>Meine Bewertungen</Link>
                    </li>
                    {user.role === "ADMIN" &&
                      <section>
                        <li class="user__item">
                          <Link to="/myratings" class="user-item__link"
                            onClick={this.toggleCollapse.bind(this)}></Link>
                        </li>
                        <li class="user__item">
                          <Link to="/admin/users" class="user-item__link"
                            onClick={this.toggleCollapse.bind(this)}>User Verwaltung</Link>
                        </li>
                        <li class="user__item">
                          <Link to="/admin/products" class="user-item__link"
                            onClick={this.toggleCollapse.bind(this)}>Produkte Verwaltung</Link>
                        </li>
                      </section>
                    }
                  </ul>
                </li>
                :
                <li class="nav-item">
                  <Link to="/login" class="nav-link">Log In</Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </header>
    );

  }
}
