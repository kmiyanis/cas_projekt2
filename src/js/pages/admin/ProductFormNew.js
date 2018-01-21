import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router";
import {updateProduct} from "../../actions/productsActions"
import {fetchCategories} from "../../actions/productsActions"

@connect((store) => {
  return {
    updated: store.products.updated,
    fetched: store.products.fetched,
    categories: store.products.categories,
  };
})
export default class ProductFormNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: [],
      title: '',
      text: '',
      price: '',
      categoryId: '',
      featured: '',
      picture: '',
      filekey: new Date(),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchCategories())
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

    if (!this.state.title) {
      errors.push("Bitte einen Titel angeben.");
    }

    if (!this.state.price) {
      errors.push("Bitte einen Preis angeben.");
    } else if (isNaN(this.state.price)) {
      errors.push("Preis sollte number sein.");
    }

    if (!this.state.text) {
      errors.push("Bitte einen Text angeben.");
    }

    if (!this.fileInput.files[0]) {
      errors.push("Bitte ein Bild angeben.");
    }

    this.setState({formErrors: errors})

    return errors
  }

  handleSubmit(_id) {
    return event => {
      event.preventDefault()
      const errors = this.validateForm()
      if (errors.length === 0) {
        this.props.dispatch(updateProduct(this.state, this.fileInput.files[0], 'create'));

        this.setState({
          title: '',
          text: '',
          price: '',
          categoryId: '',
          featured: '',
          picture: '',
          fileInput : '',
          filekey: new Date(),
        })
      }
    }
  }


  renderFormErrors() {
    if (this.state.formErrors.length > 0) {
      const renderedErrors = this.state.formErrors.map((e, i) => <li key={i}>{e}</li>);
      return <div className="content content--bg-warning grid">
        <ul>{renderedErrors}</ul>
      </div>;
    }
    return <div></div>;
  }

  render() {
    const {categories} = this.props;
    return (
      <div class="admin">
        <div class="checkout-content">
          <form onSubmit={this.handleSubmit()} class="order-form">
            <h2 class="subtitle">Produkt erstellen</h2>
            {this.renderFormErrors()}
            <filedset>
              <label>
                <span class="label-text"> Titel:<span class="required">*</span></span>
                <input
                  type="text"
                  name="title"
                  class="input--text"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                <span class="label-text"> Preis:<span class="required">*</span></span>
                <input
                  type="text"
                  class="input--text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
              </label>
            </filedset>
            <filedset>
              <label>
                <span class="label-text"> Text:<span class="required">*</span></span>
                <textarea class="textarea" name="text" value={this.state.text} onChange={this.handleInputChange}
                          rows="4"/>
              </label>
            </filedset>
            <filedset>
              <label>
                <span class="label-text"> Featured:</span>
                <input
                  name="featured"
                  type="checkbox"
                  checked={this.state.featured}
                  onChange={this.handleInputChange}/>
              </label>
            </filedset>
            <filedset>
              <label>
                <span class="label-text"> Bild:<span class="required">*</span></span>
                <input
                  key={this.state.filekey}
                  type="file"
                  ref={input => {
                    this.fileInput = input;
                  }}
                />
              </label>
            </filedset>
            <filedset>
              <label>
                <span class="label-text"> Kategorie:</span>
                <select name="categoryId" value={this.state.categoryId} onChange={this.handleInputChange}>
                  <option value=""></option>
                  {Object.keys(categories).map((c) => {
                    return <option key={c} value={categories[c].key}>{categories[c].name}</option>
                  })}
                </select>
              </label>
            </filedset>
            {this.props.updated &&
            <div class="content content--bg-green grid">
              Produkt wurde erstellt!
            </div>
            }
            <div class="checkout__bottom">

              <div class="input-checkout-btn-wrap">
                <input type="submit" class="input-checkout-btn" value="Produkt speichern"/>
              </div>
              <Link to="/admin/products" class="link--inline mgL">&#x3C;&#x3C; Produkt Übersicht</Link>
            </div>

          </form>
        </div>
      </div>
    );
  }
}
