import React from "react";
import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";
class Navigations extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          {/* <NavLink to="/" exact={true}>
            Home
          </NavLink>
          <NavLink to="/listToDo">ToDo</NavLink> */}
          <NavLink to="/MyComponents">MyComponents</NavLink>
          {/* <NavLink to="/" exact={true}>
            Form
          </NavLink> */}
          <NavLink to="/formTask">FormTask</NavLink>
          {/* <NavLink to="/users">ListUsers</NavLink> */}
          {/* <NavLink to="/colorBox">ColorBox</NavLink> */}
          {/* <NavLink to="/todoList">TodoList</NavLink> */}
          <NavLink to="/dragDrop">Drag and Drop</NavLink>
        </div>
      </>
    );
  }
}

export default Navigations;
