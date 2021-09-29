import React from "react";
import ReactDOM from "react-dom";
import { Route } from 'react-router';
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import CustomerHome from "./components/Customer/CustomerHome";
import { SaleHome } from "./components/Sale/SaleHome";
import { ProductHome } from "./components/Product/ProductHome";
import { StoreHome } from "./components/Store/StoreHome";
import SemanticUiNavBar from "./components/SemanticUiNavBar";

import "./custom.css";
//import SaleHome from './components/Sale/SaleHome';

function App() {
  return (
    <SemanticUiNavBar>
      <BrowserRouter>
        <nav>
          <ul>
            {/* <Route exact path='/' component={Home} /> */}
            <li>
              <Link to="/customer"> CustomerHome </Link>
            </li>
            {/* <Route path='/sale' component={SaleHome} />
        <Route path='/product' component={ProductHome} />
        <Route path='/store' component={StoreHome} /> */}
            {/* </Switch> */}
          </ul>
        </nav>
        <Switch>
          <Route path="/customer">
            <CustomerHome />
          </Route>
        </Switch>
      </BrowserRouter>
    </SemanticUiNavBar>
  );
}
// ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById("root"));

export default App;
