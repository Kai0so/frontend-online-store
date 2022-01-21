import React from 'react';

class Cart2 extends React.Component {
  constructor() {
    super()

    this.state = {
      quantity: 1,
    }

    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
  }

  handleIncrease() {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }))
  }

  handleDecrease() {
    const { quantity } = this.state
    if ( quantity > 0) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }))
    }
  }


  render() {
    const { quantity } = this.state;
    const {item} = this.props;
    return(
      <div>
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <button
          onClick={ this.handleIncrease }
          data-testid="product-increase-quantity"
        >+</button>
        <p>{quantity}</p>
        <button
        onClick={ this.handleDecrease }
        data-testid="product-decrease-quantity"
        >-</button>
        <p>{item.price}</p>
        
      </div>
    )
  }
}

export default Cart2;
