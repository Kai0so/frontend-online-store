import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

class Search extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      results: [],
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput({target: {value}}) {
    this.setState({ input: value })
  }

  async handleClick() {
    const { input } = this.state;
    const apiRequest = await getProductsFromCategoryAndQuery(input)
    this.setState({ results: apiRequest.results })
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input
            type="text"
            onChange={ this.handleInput }
          />
           <button
            type="button"
            onClick={ this.handleClick }
           >
             Pesquisar
          </button>
        </form>
        <div>
          {results.map(({id, price, thumbnail, title}) => (
            <Products 
              key={id}
              price={price}
              thumbnail={thumbnail}
              title={title}
            />
          ))}
        </div>
        <Link to="/Cart" data-testid="shopping-cart-button"> Carrinho </Link>
      </div>
    );
  }
}

export default Search;
