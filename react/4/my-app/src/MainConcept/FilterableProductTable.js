import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const name = this.props.stocked ?
      this.props.name :
      <span style={{ color: 'red' }}>{this.props.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const cateObj = {};
    const element = [];

    let products = this.props.products;
    products = this.props.filterText === '' ?
      products :
      products.filter(obj => obj.name.indexOf(this.props.filterText) > -1);

    products = this.props.inStockOnly ?
      products.filter(obj => obj.stocked) :
      products;

    products.forEach((el, i) => {
      if (cateObj[el.category] === undefined) cateObj[el.category] = [];
      cateObj[el.category].push(el);
    });

    for (const category in cateObj) {
      element.push(
        <ProductCategoryRow category={category} key={category} />
      );
      element.push(
        cateObj[category].map(obj =>
          <ProductRow price={obj.price} stocked={obj.stocked} name={obj.name} key={obj.name} />
        )
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {element}
        </tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiterText = this.handleFiterText.bind(this);
    this.handleInStockOnly = this.handleInStockOnly.bind(this);
  }

  handleFiterText(e) {
    this.props.onChangeFiterText(e.target.value);
  }

  handleInStockOnly(e) {
    this.props.onChangeInStockOnly(e.target.checked);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFiterText} />
        <p><input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockOnly} /> Only show products in stock</p>
      </form>
    );
  }
}

const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PRODUCTS: PRODUCTS,
      filterText: '',
      inStockOnly: false
    };
    this.handleFiterText = this.handleFiterText.bind(this);
    this.handleInStockOnly = this.handleInStockOnly.bind(this);

    setTimeout(() => {
      var arr = this.state.PRODUCTS.concat();
      arr.pop();
      this.setState({ PRODUCTS: arr });
    }, 2000);
  }

  handleFiterText(filterText) {
    this.setState({ filterText: filterText });
  }

  handleInStockOnly(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText} onChangeFiterText={this.handleFiterText}
          inStockOnly={this.state.inStockOnly} onChangeInStockOnly={this.handleInStockOnly} />
        <ProductTable products={this.state.PRODUCTS} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;
