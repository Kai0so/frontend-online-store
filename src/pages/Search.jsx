import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';


class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      results: [],
      categories: [],
    };
    
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categoriesList = await getCategories();
    console.log(categoriesList);
    this.setState({ categories: categoriesList });
  }

  handleInput({ target: { value } }) {
    this.setState({ input: value });
  }

  async handleClick() {
    const { input } = this.state;
    const apiRequest = await getProductsFromCategoryAndQuery(input);
    this.setState({ results: apiRequest.results });
  }

  render() {
    const { results, categories } = this.state;

    return (
      <main>
        <ul>
          { categories.map((elem) => (
            <li key={ elem.id }>
              <button type="button" data-testid="category">
                { elem.name }
              </button>
            </li>
          ))}
        </ul>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form>
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.handleInput }
          />
          <button data-testid="query-button" type="button" onClick={ this.handleClick }>
            Pesquisar
          </button>
        </form>
        <div>
          {results.map(({ id, price, thumbnail, title }) => (
            <Products
              key={ id }
              price={ price }
              thumbnail={ thumbnail }
              title={ title }
            />
          ))}
        </div>
        <Link to="/Cart" data-testid="shopping-cart-button"> Carrinho </Link>
      </main>
    );
  }
}

export default Search;
