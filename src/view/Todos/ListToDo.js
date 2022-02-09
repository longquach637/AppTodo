import React from "react";
import AddToDo from "./AddToDo";
import "./ToDo.scss";
import { ToastContainer, toast } from "react-toastify";
class ListToDo extends React.Component {
  state = {
    ListToDo: [
      { id: "todo1", title: "Doing HomeWork" },
      { id: "todo2", title: "Playing Games" },
      { id: "todo3", title: "Fix Bugs" },
    ],
    editToDo: {},
  };

  addNewToDo = (todo) => {
    this.setState({
      ListToDo: [...this.state.ListToDo, todo],
    });
    toast.success("Insert ToDo Success !!!");
  };

  handleDeleteToDo = (todo) => {
    let currentToDo = this.state.ListToDo;
    currentToDo = currentToDo.filter((item) => item.id !== todo.id);
    this.setState({
      ListToDo: currentToDo,
    });
    toast.success("Delete Success !!!");
  };

  handleEditToDo = (todo) => {
    let { editToDo, ListToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    if (isEmptyObj === false && editToDo.id === todo.id) {
      let listToDoCopy = [...ListToDo];
      let objIndex = listToDoCopy.findIndex((item) => item.id === todo.id);
      listToDoCopy[objIndex].title = editToDo.title;
      this.setState({
        ListToDo: listToDoCopy,
        editToDo: "",
      });
      toast.success("Update ToDo Success !!!");
      return;
    }
    this.setState({
      editToDo: todo,
    });
  };

  handleOnChangeEditToDo = (event) => {
    let editToDoCopy = { ...this.state.editToDo };
    editToDoCopy.title = event.target.value;
    this.setState({
      editToDo: editToDoCopy,
    });
  };

  render() {
    let { ListToDo, editToDo } = this.state;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    return (
      <div className="list-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />
        <div className="list-todo-content">
          {ListToDo &&
            ListToDo.length > 0 &&
            ListToDo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editToDo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editToDo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditToDo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="btnEdit"
                    onClick={() => this.handleEditToDo(item)}
                  >
                    {isEmptyObj === false && editToDo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="btnDelete"
                    onClick={() => this.handleDeleteToDo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListToDo;
