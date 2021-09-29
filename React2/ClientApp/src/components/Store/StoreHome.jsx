import axios from "axios";
import StoreTable from "./StoreTable";
import React, { Component } from "react";

export class StoreHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchStores();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  fetchStores() {
    this.setState({
      loading: true,
    });
    axios
      .get("Stores/GetStores")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          stores: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { stores, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Stores</h1>
         < StoreTable parent="StoreHome" stores={stores}/>

          {/* <CustomerTable parent="CustomerHome" customers={customers} /> */}
        </div>
      );
    }
  }
}

export default StoreHome;
