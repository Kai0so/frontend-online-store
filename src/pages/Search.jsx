import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categoriesList = await getCategories();
    console.log(categoriesList);
    this.setState({ categories: categoriesList });
  }

  render() {
    const { categories } = this.state;

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
        <Link to="/Cart" data-testid="shopping-cart-button"> Carrinho </Link>
      </main>
    );
  }
}

export default Search;
