import firebase, { auth, provider } from '../../fire.js';
import React from "react";
import { Link, Redirect } from "react-router";
import { connect } from "react-redux"

import UserTable from "../../components/UserTable";
import * as userActions from "../../actions/userActions";

@connect((store) => {
  return {
    loggedin: store.user.loggedin,
    user: store.user.user,
    loaded: store.user.loaded,
    users: store.user.users
  };
})

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    if ( !this.props.loggedin || (this.user != null && this.user.role !== "ADMIN") ) {
      this.props.history.push('/')
    }
  }
  componentDidMount() {
    this.props.dispatch(userActions.fetchAllUsers())
  }

  deleteUser(_id) {
    this.props.dispatch(userActions.deleteUser(_id));
  }

  makeAdmin(_id) {
    this.props.dispatch(userActions.makeAdmin(_id));
  }

  makeUser(_id) {
    this.props.dispatch(userActions.makeUser(_id));
  }

  activateUser(_id) {
    this.props.dispatch(userActions.activateUser(_id));
  }

  render() {
    const {
      loaded,
      users,
    } = this.props;

    const renderedUsers = [];
    if (users != null) {
      Object.keys(users).map(function (key) {
        renderedUsers.push(<UserTable user={users[key]}
                                      deleteUser={() => this.deleteUser(key)}
                                      makeUser={() => this.makeUser(key)}
                                      makeAdmin={() => this.makeAdmin(key)}
                                      activateUser={() => this.activateUser(key)}
                                      key={key} />)
      }.bind(this))
    }

    const h1 = <h1 class="title">Registrierte User</h1>
    if (loaded) {
      if (renderedUsers.length > 0) {
        return (
          <div class="admin">
            {h1}
            {renderedUsers}
          </div>
        )
      }
    }

    return (
      <div class="admin">
        {h1}
        <div class="content content--bg-white"><p>Loading...</p></div>
      </div>
    )
  }
}
