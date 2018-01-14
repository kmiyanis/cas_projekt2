import React from "react";

export default class UserTable extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div class="checkout-content myorders">
        <h2 class="subtitle">
          {user.role && user.role === "ADMIN" && <span>Admin: </span>}
          {user.deleted && <span>Gelöschter User: </span>}
          {user.firstname} {user.lastname}, {user.email}
        </h2>
        {user.role && user.role === "ADMIN" ?
          <button class="checkout__login" onClick={this.props.makeUser}><em>User degradieren</em></button>
          :
          !user.deleted && <button class="checkout__login" onClick={this.props.makeAdmin}><em>User zum Admin befördern</em></button>
        }
        {user.deleted ?
          <button class="checkout__login" onClick={this.props.activateUser}><em>User wiederherstellen</em></button>
          :
          <button class="checkout__login" onClick={this.props.deleteUser}><em>User löschen</em></button>
        }
      </div>
    );
  }
}