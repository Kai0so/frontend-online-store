import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      img: '',
      price: 0,
    };
  }

  componentDidMount() {
    this.apiRequest();
  }

  async apiRequest() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromId(id);
    this.setState({ product,
      img: product.pictures[0].url,
      price: product.price,
    });
  }

  render() {
    const { product: { title } } = this.state;
    const { img, price } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ img } alt={ title } />
        <p>{price}</p>
        <button type="button">Adicionar ao carrinho</button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default ProductDetails;
