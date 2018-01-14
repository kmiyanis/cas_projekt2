import React from 'react';
import {connect} from 'react-redux';
import {Link, History} from "react-router";
import * as userActions from "../actions/userActions"
import FormErrors from "../components/FormErrors";

@connect((store) => {
  return {
    authenticationError: store.user.error,
    loggedin: store.user.loggedin
  };
})
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  validateForm() {
    const errors = [];

    if (!this.state.email) {
      errors.push("Bitte eine E-Mail angeben.");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      errors.push('Invalid email address');
    }

    if (!this.state.password) {
      errors.push("Bitte ein Passwort angeben.");
    }

    this.setState({formErrors: errors})

    return errors
  }

  handleSubmit() {
    return event => {
      event.preventDefault()
      const errors = this.validateForm()
      if (errors.length === 0) {
        this.props.dispatch(userActions.login(this.state));
        this.props.history.goBack()
      }
    }
  }


  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="content content--bg-error">{this.props.authenticationError.message}</div>;
    }
    return <div></div>;
  }

  renderFormErrors() {
    if (this.state.formErrors.length > 0) {
      const renderedErrors = this.state.formErrors.map((e, i) => <li key={i}>{e}</li>);
      return <div className="content content--bg-warning">
        <ul>{renderedErrors}</ul>
      </div>;
    }
    return <div></div>;
  }

  render() {
    return (
      <div>
        <div class="checkout-content">
          <form onSubmit={this.handleSubmit()} class="order-form">
            <h2 class="subtitle">Login</h2>
            {this.renderAuthenticationError()}
            {this.renderFormErrors()}
            <filedset>
              <label>
                <span class="label-text"> E-Mail:<span class="required">*</span></span>
                <input
                  type="text"
                  name="email"
                  class="input--text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                <span class="label-text">Passwort:<span class="required">*</span></span>
                <input
                  type="password"
                  name="password"
                  class="input--text"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label>
            </filedset>
            <div class="checkout__bottom">
              <div class="input-checkout-btn-wrap">
                <input type="submit" class="input-checkout-btn" value="Login"/>
              </div>
            </div>
          </form>
        </div>
        <div class="checkout-content">
          <h2 class="subtitle">User Registrieren</h2>
          <Link class="checkout" to="/signup"><em>Registrieren</em></Link>
        </div>
      </div>

    );
  }
}