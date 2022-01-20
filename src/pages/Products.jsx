import React from 'react';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  addProductCart = () => {
    const { result } = this.props;
    const storageItems = JSON.parse(localStorage.getItem('Item'));
    if (storageItems === null) {
      const savedItems = [];
      savedItems.push(result);
      localStorage.setItem('Item', JSON.stringify([...savedItems]));
    } else {
      const savedItems = storageItems;
      savedItems.push(result);
      localStorage.setItem('Item', JSON.stringify([...savedItems]));
    }
  }

  render() {
    const { price, thumbnail, title } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <span>{ price }</span>
        <img src={ thumbnail } alt={ title } />
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.addProductCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  result: PropTypes.objectOf(PropTypes.any).isRequired,
};
