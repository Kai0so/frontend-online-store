import React from 'react';

export default class Products extends React.Component {
  render() {
    const {price, thumbnail, title} = this.props;
    console.log(title)
    return (
      <h1>teste</h1>
    )
  }
}
