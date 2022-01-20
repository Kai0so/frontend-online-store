import React from 'react';
import { getProductFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super()

    this.state = {
      product: [],
      img: '',
      price: 0,
    }
  }

  componentDidMount() {
    this.apiRequest()
  }

  async apiRequest() {
    const { match: {params: {id}}} = this.props;
    const product = await getProductFromId(id)
    this.setState({ product,
      img: product.pictures[0].url,
      price: product.price,
    })
  }

  render() {
    const { product: { title}} = this.state;
    const { img, price } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <img src={img} />
        <p>{price}</p>
      </div>
    )
  }
}

export default ProductDetails;
