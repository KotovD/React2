import axios from "axios";
import SaleTable from "./SaleTable";
import React, { Component } from "react";

export class SaleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchSales();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  fetchSales() {
    this.setState({
      loading: true,
    });
    axios
      .get("Sales/GetSales")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          sales: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { sales, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Sales</h1>
         < SaleTable parent="SaleHome" sales={sales}/>

          {/* <CustomerTable parent="CustomerHome" customers={customers} /> */}
        </div>
      );
    }
  }
}

export default SaleHome;
