import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Search from './pages/Search';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Link to="/Cart" data-testid="shopping-cart-button"> Carrinho </Link>
      <Switch>
        <Route exact path="/Cart" component={ Cart } />
        <Route exact path="/" component={ Search } />
        <Route path="/product/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
