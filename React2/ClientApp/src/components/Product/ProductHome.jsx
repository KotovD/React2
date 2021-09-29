import axios from "axios";
import ProductTable from "./ProductTable";
import React, { Component } from "react";
import CreateProduct from "./CreateProduct";

export class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
      openCreateProductModal: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchProducts();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  fetchProducts = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("Products/GetProducts")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          products: data,
          loading: false,
        });  
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleCreateProductModal = (value) => {
    this.setState({
      openCreateProductModal: value
    })
   }
 

  render() {
    const { products, loading, openCreateProductModal } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <CreateProduct open={openCreateProductModal} fetchProducts={this.fetchProducts}/>
          {/* <h1>Products</h1> */}
          <ProductTable parent="ProductHome" products={products} fetchProducts={this.fetchProducts}/>
          {/* <CustomerTable parent="CustomerHome" customers={customers} /> */}
        </div>
      );
    }
  }
}

export default ProductHome;
