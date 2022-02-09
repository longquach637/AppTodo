import React from "react";
import { ToastContainer, toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    title: "",
  };
  handleAdd = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddToDo = () => {
    if (!this.state.title) {
      toast.error("Missing error");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewToDo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => {
            this.handleAdd(event);
          }}
        ></input>
        <button className="btnAdd" onClick={() => this.handleAddToDo()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddToDo;
