import React from "react";
import AddToDo from "./AddToDo";
import "./ToDo.scss";
import { withRouter } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
// class ListToDo extends React.Component {
//   // state = {
//   //   // ListToDo: [
//   //   //   { id: "todo1", title: "Doing HomeWork" },
//   //   //   { id: "todo2", title: "Playing Games" },
//   //   //   { id: "todo3", title: "Fix Bugs" },
//   //   // ],
//   //   editToDo: {},
//   // };

//   // addNewToDo = (todo) => {
//   //   this.setState({
//   //     ListToDo: [...this.state.ListToDo, todo],
//   //   });
//   //   toast.success("Insert ToDo Success !!!");
//   // };

//   // handleDeleteToDo = (todo) => {
//   //   let currentToDo = this.state.ListToDo;
//   //   currentToDo = currentToDo.filter((item) => item.id !== todo.id);
//   //   this.setState({
//   //     ListToDo: currentToDo,
//   //   });
//   //   toast.success("Delete Success !!!");
//   // };

//   // handleEditToDo = (todo) => {
//   //   let { editToDo, ListToDo } = this.state;
//   //   let isEmptyObj = Object.keys(editToDo).length === 0;
//   //   if (isEmptyObj === false && editToDo.id === todo.id) {
//   //     let listToDoCopy = [...ListToDo];
//   //     let objIndex = listToDoCopy.findIndex((item) => item.id === todo.id);
//   //     listToDoCopy[objIndex].title = editToDo.title;
//   //     this.setState({
//   //       ListToDo: listToDoCopy,
//   //       editToDo: "",
//   //     });
//   //     toast.success("Update ToDo Success !!!");
//   //     return;
//   //   }
//   //   this.setState({
//   //     editToDo: todo,
//   //   });
//   // };

//   // handleOnChangeEditToDo = (event) => {
//   //   let editToDoCopy = { ...this.state.editToDo };
//   //   editToDoCopy.title = event.target.value;
//   //   this.setState({
//   //     editToDo: editToDoCopy,
//   //   });
//   // };

//   handleDeleteTodo = (item) => {
//     console.log("Handle onclick: ", item);
//     this.props.deleteListTodoRedux(item);
//   };

//   render() {
//     console.log(">>>check props redux list:", this.props.reduxList);
//     let ListToDo = this.props.reduxList;
//     console.log("Lisst to do: ", ListToDo);
//     //let isEmptyObj = Object.keys(editToDo).length === 0;

//     return (
//       <div className="list-todo-container">
//         <AddToDo addNewToDo={this.addNewToDo} />
//         <div className="list-todo-content">
//           {ListToDo &&
//             ListToDo.length > 0 &&
//             ListToDo.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {index + 1} - {item.title}{" "}
//                   <button onClick={() => this.handleDeleteTodo(item)}>X</button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateProps = (state) => {
//   return { reduxList: state.ListToDo };
// };

// const mapDispathToProps = (dispatch) => {
//   return {
//     deleteListTodoRedux: (todoDelete) =>
//       dispatch({ type: "DELETE_LIST_TODO", payload: todoDelete }),
//     addUserRedux: () => dispatch({ type: "CREATE_USER" }),
//     editUserRedux: (userEdit) =>
//       dispatch({ type: "EDIT_USER", payload: userEdit }),
//   };
// };

// export default connect(mapStateProps, mapDispathToProps)(withRouter(ListToDo));

class ListToDo extends React.Component {
  handleOnDelete = (item) => {
    console.log(">>>check item: ", item);
    this.props.deleteListTodoRedux(item);
  };
  render() {
    console.log(">>>check props redux:", this.props.reduxList);
    let listToDo = this.props.reduxList;

    return (
      <>
        <div>
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.title}
                  <button onClick={() => this.handleOnDelete(item)}>X</button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateProps = (state) => {
  return { reduxList: state.ListToDo };
};

const mapDispathToProps = (dispatch) => {
  return {
    deleteListTodoRedux: (todoDelete) =>
      dispatch({ type: "DELETE_LIST_TODO", payload: todoDelete }),
  };
};

export default connect(mapStateProps, mapDispathToProps)(ListToDo);
