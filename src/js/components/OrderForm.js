import React from "react";
import {connect} from "react-redux"
import FormErrors from "./FormErrors";
import {addOrder} from "../actions/orderActions"

@connect((store) => {
  return {
    orderSuccessfull: store.order.pushed,
  };
})

export default class OrderForm extends React.Component {
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
      errors.push(["Bitte einen Vornamen angeben.", "firstname"]);
    }

    if (!this.state.lastname) {
      errors.push(["Bitte einen Nachnamen angeben.", "lastname"]);
    }

    if (!this.state.street) {
      errors.push(["Bitte eine Adresse angeben.", "street"]);
    }

    if (!this.state.zip) {
      errors.push(["Bitte eine Postleitzahl angeben.", "zip"]);
    } else if (!/[0-9]/i.test(this.state.zip)) {
      errors.push(["Invalid Postleitzahl", "zip"]);
    }

    if (!this.state.town) {
      errors.push(["Bitte einen Ort angeben.", "town"]);
    }

    if (!this.state.email) {
      errors.push(["Bitte eine E-Mail angeben.", "email"]);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      errors.push(["Invalid email address", "email"]);
    }

    if (!this.state.phone) {
      errors.push(["Bitte eine Telefon Number angeben.", "phone"]);
    } else if (!/[0-9._%+-]/i.test(this.state.phone)) {
      errors.push(["Invalid Telefon Number", "phone"]);
    }

    this.setState({formErrors: errors})
    return errors
  }

  handleSubmit(cart) {
    return event => {
      event.preventDefault()
      const order = {
        createdAt: Date.now(),
        ...this.state,
        cart
      }

      const errors = this.validateForm()
      if (errors.length === 0) {
        this.props.dispatch(addOrder(order));
      }
    }
  }

  renderFormErrors() {
    if (this.state.formErrors.length > 0) {
      const renderedErrors = this.state.formErrors.map((e, i) => <li key={i}>{e[0]}</li>);
      return <div className="content content--bg-warning grid">
        <ul>{renderedErrors}</ul>
      </div>;
    }
    return <div></div>;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.formErrors.length > 0 && this.state.formErrors.length != prevState.formErrors.length) {
      const inputname = this.state.formErrors[0][1];
      const inputField = this.refs[inputname];
      inputField.focus();
      if (inputField && window.scrollTo) {
        window.scrollTo(0, inputField.offsetTop - 100)
      }

      for (let error of prevState.formErrors) {
        this.refs[error[1]].className = 'input--text'
      }
      for (let error of this.state.formErrors) {
        this.refs[error[1]].className = this.refs[error[1]].className + ' input--error'
      }
    }
  }

  render() {
    if (this.props.orderSuccessfull) {
      this.state = {
        formErrors: [],
      };

      return (
        <div class="order-success">
          <p class="order-success__title">Vielen Dank für Ihre Bestellung!</p>
          <img class="order-success__img" src="/assets/img/fukusuke.svg"/>
        </div>
      )
    }

    return (
      <form onSubmit={this.handleSubmit(this.props.cart)} class="order-form">
        <h2 class="subtitle">Ihre Angabe</h2>
        <p class="notice">Alle Felder sind Pflichtfelder. Bitte füllen Sie sie aus.</p>
        {this.renderFormErrors()}

        <filedset>
          <label>
            <span class="label-text"> Vorname:</span>
            <input
              type="text"
              name="firstname"
              class="input--text"
              value={this.state.firstname}
              ref="firstname"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span class="label-text"> Nachname:</span>
            <input
              type="text"
              class="input--text"
              name="lastname"
              ref="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange}
            />
          </label>
        </filedset>
        <filedset>
          <label>
            <span class="label-text">Strasse:</span>
            <input
              type="text"
              class="input--text"
              name="street"
              ref="street"
              value={this.state.street}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            <span class="label-text"> PLZ:</span>
            <input
              type="text"
              class="input--text"
              name="zip"
              ref="zip"
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span class="label-text">Ort:</span>
            <input
              type="text"
              name="town"
              ref="town"
              class="input--text"
              value={this.state.town}
              onChange={this.handleInputChange}
            />
          </label>
        </filedset>
        <filedset>
          <label>
            <span class="label-text"> E-Mail:</span>
            <input
              type="text"
              name="email"
              ref="email"
              class="input--text"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span class="label-text">Phone:</span>
            <input
              type="text"
              name="phone"
              ref="phone"
              class="input--text"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </label>
        </filedset>
        <div class="checkout__bottom">
          <div class="input-checkout-btn-wrap">
            <input type="submit" class="input-checkout-btn" value="Bestellen"/>
          </div>
        </div>
      </form>
    );
  }
}
