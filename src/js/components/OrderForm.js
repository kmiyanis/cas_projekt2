import React from "react";
import { connect } from "react-redux"
import FormErrors from "./FormErrors";
import { addOrder } from "../actions/orderActions"

@connect((store) => {
  return {
    orderSuccessfull: store.order.pushed,
  };
})

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      street: '',
      town: '',
      zip: '',
      email: props.user.email || props.user.displayName || '',
      phone: '',
      formErrors: { email: '', default: '' },
      emailValid: false,
      formValid: false
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
    },
      () => { this.validateField(name, value) }
    );
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' ist nicht korrekt';
        break;
      // case 'password':
      //   passwordValid = value.length >= 6;
      //   fieldValidationErrors.password = passwordValid ? '' : ' is too short';
      //   break;
      default:
        fieldValidationErrors.default = value.length > 0 ? '' : ' darf nicht leer sein'
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid });
  }

  handleSubmit(cart) {
    return event => {
      event.preventDefault()
      const order = {
        createdAt: Date.now(),
        ...this.state,
        cart
      }
      // don't need all the state's data
      delete order.formErrors;
      delete order.formValid;
      delete order.emailValid;

      this.props.dispatch(addOrder(order));
    }
  }

  render() {
    if (this.props.orderSuccessfull) {
      this.state = {
        firstname: '',
        lastname: '',
        street: '',
        town: '',
        zip: '',
        date: '',
        email: '',
        phone: '',
        formErrors: { email: '', default: '' },
        emailValid: false,
        formValid: false
      };

      return (
        <div>
          Vielen Dank für Ihre Bestellung!
        </div>
      )
    }

    return (
      <form onSubmit={this.handleSubmit(this.props.cart)}>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <label>
          Vorname:
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Nachname:
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleInputChange}
          />
        </label>
        <br /><br />
        <label>
          Strasse:
          <input
            type="text"
            name="street"
            value={this.state.street}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          PLZ:
          <input
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Ort:
          <input
            type="text"
            name="town"
            value={this.state.town}
            onChange={this.handleInputChange}
          />
        </label>
        <br /><br />
        <label>
          E-Mail:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </label>
        <br /><br />
        <input type="submit" class="checkout" value="Bestellen" disabled={!this.state.formValid} />
      </form>
    );
  }
}
