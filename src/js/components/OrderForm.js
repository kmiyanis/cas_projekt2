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
            firstname: '',
            lastname: '',
            street: '',
            town: '',
            zip: '',
            email: '',
            phone: '',
            formErrors: {email: '', default: ''},
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
            () => {
                this.validateField(name, value)
            }
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
        this.setState({formValid: this.state.emailValid});
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
                formErrors: {email: '', default: ''},
                emailValid: false,
                formValid: false
            };

            return (
                <div class="order-success">
                    <p class="order-success__title">Vielen Dank für Ihre Bestellung!</p>
                    <img class="order-success__img" src="/assets/img/fukusuke.svg" />
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit(this.props.cart)} class="order-form">
                <h2 class="subtitle">Ihre Angabe</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>
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
                        <span class="label-text">Strasse:<span class="required">*</span></span>
                        <input
                            type="text"
                            class="input--text"
                            name="street"
                            value={this.state.street}
                            onChange={this.handleInputChange}
                        />
                    </label>

                    <label>
                        <span class="label-text"> PLZ:<span class="required">*</span></span>
                        <input
                            type="text"
                            class="input--text"
                            name="zip"
                            value={this.state.zip}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        <span class="label-text">Ort:<span class="required">*</span></span>
                        <input
                            type="text"
                            name="town"
                            class="input--text"
                            value={this.state.town}
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
                    <label>
                        <span class="label-text">Phone:<span class="required">*</span></span>
                        <input
                            type="text"
                            name="phone"
                            class="input--text"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </filedset>
                <div class="checkout__bottom">
                    <input type="submit" class="checkout-btn" value="Bestellen" disabled={!this.state.formValid}/>
                </div>
            </form>
        );
    }
}
