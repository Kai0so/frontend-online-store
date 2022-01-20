import React from 'react';

class Cart extends React.Component {
  getSavedCartItems = () => {
    const localData = JSON.parse(localStorage.getItem('Item'));
    return localData.map((item, index) => (
      <p data-testid="shopping-cart-product-name" key={ index }>
        {item.title}
      </p>
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
