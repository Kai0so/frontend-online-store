import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Cart" data-testid="shopping-cart-button"> Carrinho </Link>
      </div>
    );
  }
}

export default Search;
