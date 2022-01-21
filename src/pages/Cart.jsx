import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      productQuantity: 1,
    };
  }

  handleOnClick = ({ target }) => {
    const { name } = target;
    const { productQuantity } = this.state;

    if (name === 'sub' && productQuantity > 0) {
      this.setState((prevState) => ({ productQuantity: prevState.productQuantity - 1 }));
    } else {
      this.setState((prevState) => ({ productQuantity: prevState.productQuantity + 1 }));
    }
  }

  getSavedCartItems = () => {
    const localData = JSON.parse(localStorage.getItem('Item'));
    const { productQuantity } = this.state;

    return localData.map((item, index) => (
      <div key={ index }>
        <p data-testid="shopping-cart-product-name">{ item.title }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          name="sub"
          id={ item.id }
          onClick={ this.handleOnClick }
        >
          -
        </button>
        <p>{ productQuantity }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          name="sum"
          id={ item.id }
          onClick={ this.handleOnClick }
        >
          +
        </button>
        <p>{`R$ ${item.price * productQuantity}`}</p>
        <button
          type="button"
        >
          X
        </button>
      </div>
    ));
  }

  render() {
    const localData = JSON.parse(localStorage.getItem('Item'));

    return (
      <>
        {
          localData === null
            && (
              <h1 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            )
        }
        {
          (localData !== null) && this.getSavedCartItems()
        }
        {
          (localData !== null) && (
            <h3 data-testid="shopping-cart-product-quantity">
              Total de Itens no Carrinho:
              {localData.length}
            </h3>)
        }
      </>
    );
  }
}

export default Cart;
