import React from "react";
import { IndexLink, Link } from "react-router";
import styled from 'styled-components';


export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const indexClass  	= location.pathname === "/" ? "active" : "";
    const recipesClass  = location.pathname.match(/^\/recipes/) ? "active" : "";
    const shopClass     = location.pathname.match(/^\/shop/) ? "active" : "";
    const coursesClass  = location.pathname.match(/^\/courses/) ? "active" : "";
    const contactClass  = location.pathname.match(/^\/contact/) ? "active" : "";
    const navClass = collapsed ? "collapsed" : "open";
    const navUlClass = collapsed ? "" : "show";
    const expanded = collapsed ? false : true;

    return (
      <header class="navbar">
        <div class="container">
          <a class="navbar-brand" href="#">MIYA JAPAN TEE</a>

          <button onClick={ this.toggleCollapse.bind(this) } class={ 'navbar-toggler ' + navClass } type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={ expanded } aria-label="Toggle navigation">
            <span class="hamburger__bar1"></span>
            <span class="hamburger__bar2"></span>
          </button>

          <div class={'collapse navbar-collapse ' + navUlClass} id="navbarResponsive">
            <ul class="navbar-nav">
              <li class={"nav-item " + indexClass}>
                <IndexLink class="nav-link" to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>

              <li class={"nav-item " + shopClass}>
                <Link to="shop" class="nav-link" onClick={this.toggleCollapse.bind(this)}>Shop</Link>
              </li>
              <li class={"nav-item " + recipesClass}>
                <Link to="recipes" class="nav-link"onClick={this.toggleCollapse.bind(this)}>Rezepte</Link>
              </li>
              <li class={"nav-item " + coursesClass}>
                <Link to="courses" class="nav-link" onClick={this.toggleCollapse.bind(this)}>Kurse</Link>
              </li>
              <li class={"nav-item " + contactClass}>
                <Link to="contact" class="nav-link" onClick={this.toggleCollapse.bind(this)}>Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );

//    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
//        <div class="container">
//          <div class="navbar-header">
//            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
//              <span class="sr-only">Toggle navigation</span>
//              <span class="icon-bar"></span>
//              <span class="icon-bar"></span>
//              <span class="icon-bar"></span>
//            </button>
//          </div>
//          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
//            <ul class="nav navbar-nav">
//              <li class={featuredClass}>
//                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
//              </li>
//              <li class={archivesClass}>
//                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
//              </li>
//              <li class={settingsClass}>
//                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
//              </li>
//            </ul>
//          </div>
//        </div>
//      </nav>
  }
}
