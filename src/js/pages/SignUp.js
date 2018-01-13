import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/userActions"
import FormErrors from "../components/FormErrors";

@connect((store) => {
  return {
    authenticationError: store.user.error,
    userCreated: store.user.created
  };
})
export default class SignUp extends React.Component {
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

    if (!this.state.firstname) {
      errors.push("Bitte einen Vornamen angeben.");
    }

    if (!this.state.lastname) {
      errors.push("Bitte einen Nachnamen angeben.");
    }

    if (!this.state.email) {
      errors.push("Bitte eine E-Mail angeben.");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      errors.push('Invalid email address');
    }

    if (!this.state.password) {
      errors.push("Bitte ein Passwort angeben.");
    }

    if (this.state.password && this.state.password.length < 7) {
      errors.push("Bitte ein Passwort mit mindestens 6 Zeichen angeben.");
    }

    if (!this.state.passwordConfirmation) {
      errors.push("Bitte eine Passwort-Wiederholung angeben.");
    }

    if (this.state.password !== this.state.passwordConfirmation) {
      errors.push("Die Passwörter stimmen nicht überein.");
    }

    this.setState({ formErrors: errors })

    return errors
  }

  handleSubmit() {
    return event => {
      event.preventDefault()
      const errors = this.validateForm()
      if (errors.length === 0) {
        this.props.dispatch(userActions.createAccount(this.state));
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
      return <div className="content content--bg-warning"><ul>{renderedErrors}</ul></div>;
    }
    return <div></div>;
  }

  render() {
    if (this.props.userCreated) {
      this.state = {
        formErrors: [],
      };

      return (
        <div class="checkout-content">
          <div class="order-success">
            <p class="order-success__title">Vielen Dank für Ihre Registrierung!</p>
            <img class="order-success__img" src="/assets/img/fukusuke.svg" />
          </div>
        </div>
      )
    }

    return (
      <div class="checkout-content">
        <form onSubmit={this.handleSubmit()} class="order-form">
          <h2 class="subtitle">Registrierung</h2>
          {this.renderAuthenticationError()}
          {this.renderFormErrors()}
          <filedset>
            <label>
              <span class="label-text"> Vorname:<span class="required">*</span></span>
              <input
                type="text"
                name="firstname"
                class="input--text"
                value={this.state.firstname}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              <span class="label-text"> Nachname:<span class="required">*</span></span>
              <input
                type="text"
                class="input--text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChange}
              />
            </label>
          </filedset>
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
          </filedset>
          <filedset>
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
            <label>
              <span class="label-text">Passwort:<span class="required">*</span></span>
              <input
                type="password"
                name="passwordConfirmation"
                class="input--text"
                value={this.state.passwordConfirmation}
                onChange={this.handleInputChange}
              />
            </label>
          </filedset>
          <div class="checkout__bottom">
            <div class="input-checkout-btn-wrap">
              <input type="submit" class="input-checkout-btn" value="Registrieren"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}