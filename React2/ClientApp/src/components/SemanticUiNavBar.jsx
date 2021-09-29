import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default class SemanticUiNavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={NavLink}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/customer"
            name="customer"
            active={activeItem === "customer"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/product"
            name="product"
            active={activeItem === "product"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            as={NavLink}
            to="/sale"
            name="sale"
            active={activeItem === "sale"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/store"
            name="store"
            active={activeItem === "store"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
