import React from "react";
import { connect } from "react-redux";
import { fetchProduct, updateProduct, deleteProduct } from "../../actions/productsActions"
import {Link} from "react-router";

@connect((store) => {
  return {
    product: store.products.product,
    updated: store.products.updated,
    deleted: store.products.deleted,
  };
})
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: [],
      title: props.title,
      text: props.text,
      price: props.price,
      categoryId: props.categoryId,
      featured: props.featured,
      picture: props.picture,
      _id: props._id,
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

    if (!this.state.title) {
      errors.push("Bitte einen Titel angeben.");
    }

    if (!this.state.price) {
      errors.push("Bitte einen Preis angeben.");
    }

    if (!this.state.text) {
      errors.push("Bitte einen Text angeben.");
    }

    this.setState({ formErrors: errors })

    return errors
  }

  deleteProduct(e, _id) {
    e.preventDefault();
    this.props.dispatch(deleteProduct(_id));
  }

  handleSubmit(_id) {
    return event => {
      event.preventDefault()
      const errors = this.validateForm()
      if (errors.length === 0) {
        const product = {
          editedAt: Date.now(),
          ...this.state,
        }
        this.props.dispatch(updateProduct(product, this.fileInput.files[0]));
      }
    }
  }

  renderFormErrors() {
    if (this.state.formErrors.length > 0) {
      const renderedErrors = this.state.formErrors.map((e, i) => <li key={i}>{e}</li>);
      return <div className="content content--bg-warning grid"><ul>{renderedErrors}</ul></div>;
    }
    return <div></div>;
  }

  render() {
    const { product, categories } = this.props;

    if (!product) {
      return (
        <div class="content content--bg-green">
          Produkt wurde gelöscht!
        </div>
      ) 
    }

    return (
      <div class="checkout-content">
        <form onSubmit={this.handleSubmit(product._id)} class="order-form">
          <h2 class="subtitle">Produkt editieren</h2>
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
              <textarea class="textarea" name="text" value={this.state.text} onChange={this.handleInputChange} rows="4" />
            </label>
          </filedset>
          <filedset>
            <label>
              <span class="label-text"> Featured:<span class="required">*</span></span>
              <input
                name="featured"
                type="checkbox"
                checked={this.state.featured}
                onChange={this.handleInputChange} />
            </label>
          </filedset>
          <filedset>
            <label>
              <span class="label-text"> Bild:<span class="required">*</span></span>
              <input
                type="file"
                ref={input => {
                  this.fileInput = input;
                }}
              />
            </label>
          </filedset>
          <filedset>
            <label>
              <span class="label-text"> Kategorie:<span class="required">*</span></span>
              <select name="categoryId" value={this.state.categoryId} onChange={this.handleInputChange}>
                {Object.keys(categories).map((c) => {
                  return <option value={categories[c].key}>{categories[c].name}</option>
                })}
              </select>
            </label>
          </filedset>
          {this.props.updated &&
            <div class="content content--bg-green">
              Produkt wurde aktualisiert!
          </div>
          }
          <div class="checkout__bottom">
            <div class="input-checkout-btn-wrap">
              <input type="submit" class="input-checkout-btn" value="Produkt speichern"/>
            </div>

          </div>
            <a href="#" class="checkout__login" onClick={(e) => this.deleteProduct(e, product._id)}><em>Produkt löschen</em></a>
          <Link to={"/admin/products/" + this.state.categoryId} class="link--inline mgL">Back to Produkt Category Übersicht</Link>
          <Link to="/admin/products" class="link--inline mgL">Back to Produkt Übersicht</Link>
        </form>
      </div>
    );
  }
}