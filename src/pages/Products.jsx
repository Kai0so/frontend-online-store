import React from 'react';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  render() {
    const { price, thumbnail, title } = this.props;
    // console.log(typeof price);
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <span>{ price }</span>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
