// import React from "react";
// import AddToDo from "./AddToDo";
// import "./ToDo.scss";
// import { withRouter } from "react-router";
// import { ToastContainer, toast } from "react-toastify";
// import { connect } from "react-redux";
// // class ListToDo extends React.Component {
// //   // state = {
// //   //   // ListToDo: [
// //   //   //   { id: "todo1", title: "Doing HomeWork" },
// //   //   //   { id: "todo2", title: "Playing Games" },
// //   //   //   { id: "todo3", title: "Fix Bugs" },
// //   //   // ],
// //   //   editToDo: {},
// //   // };

// //   // addNewToDo = (todo) => {
// //   //   this.setState({
// //   //     ListToDo: [...this.state.ListToDo, todo],
// //   //   });
// //   //   toast.success("Insert ToDo Success !!!");
// //   // };

// //   // handleDeleteToDo = (todo) => {
// //   //   let currentToDo = this.state.ListToDo;
// //   //   currentToDo = currentToDo.filter((item) => item.id !== todo.id);
// //   //   this.setState({
// //   //     ListToDo: currentToDo,
// //   //   });
// //   //   toast.success("Delete Success !!!");
// //   // };

// //   // handleEditToDo = (todo) => {
// //   //   let { editToDo, ListToDo } = this.state;
// //   //   let isEmptyObj = Object.keys(editToDo).length === 0;
// //   //   if (isEmptyObj === false && editToDo.id === todo.id) {
// //   //     let listToDoCopy = [...ListToDo];
// //   //     let objIndex = listToDoCopy.findIndex((item) => item.id === todo.id);
// //   //     listToDoCopy[objIndex].title = editToDo.title;
// //   //     this.setState({
// //   //       ListToDo: listToDoCopy,
// //   //       editToDo: "",
// //   //     });
// //   //     toast.success("Update ToDo Success !!!");
// //   //     return;
// //   //   }
// //   //   this.setState({
// //   //     editToDo: todo,
// //   //   });
// //   // };

// //   // handleOnChangeEditToDo = (event) => {
// //   //   let editToDoCopy = { ...this.state.editToDo };
// //   //   editToDoCopy.title = event.target.value;
// //   //   this.setState({
// //   //     editToDo: editToDoCopy,
// //   //   });
// //   // };

// //   handleDeleteTodo = (item) => {
// //     console.log("Handle onclick: ", item);
// //     this.props.deleteListTodoRedux(item);
// //   };

// //   render() {
// //     console.log(">>>check props redux list:", this.props.reduxList);
// //     let ListToDo = this.props.reduxList;
// //     console.log("Lisst to do: ", ListToDo);
// //     //let isEmptyObj = Object.keys(editToDo).length === 0;

// //     return (
// //       <div className="list-todo-container">
// //         <AddToDo addNewToDo={this.addNewToDo} />
// //         <div className="list-todo-content">
// //           {ListToDo &&
// //             ListToDo.length > 0 &&
// //             ListToDo.map((item, index) => {
// //               return (
// //                 <div key={item.id}>
// //                   {index + 1} - {item.title}{" "}
// //                   <button onClick={() => this.handleDeleteTodo(item)}>X</button>
// //                 </div>
// //               );
// //             })}
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // const mapStateProps = (state) => {
// //   return { reduxList: state.ListToDo };
// // };

// // const mapDispathToProps = (dispatch) => {
// //   return {
// //     deleteListTodoRedux: (todoDelete) =>
// //       dispatch({ type: "DELETE_LIST_TODO", payload: todoDelete }),
// //     addUserRedux: () => dispatch({ type: "CREATE_USER" }),
// //     editUserRedux: (userEdit) =>
// //       dispatch({ type: "EDIT_USER", payload: userEdit }),
// //   };
// // };

// // export default connect(mapStateProps, mapDispathToProps)(withRouter(ListToDo));

// class ListToDo extends React.Component {
//   handleOnDelete = (item) => {
//     console.log(">>>check item: ", item);
//     this.props.deleteListTodoRedux(item);
//   };

//   handleAdd = () => {
//     this.props.addListTodoRedux();
//   };

//   handleOnUpdate = (item) => {
//     this.props.updateListTodoRedux(item);
//   };
//   render() {
//     console.log(">>>check props redux:", this.props.reduxList);
//     let listToDo = this.props.reduxList;
//     console.log(">>>check list to do redux:", listToDo);

//     return (
//       <>
//         <div>
//           {listToDo &&
//             listToDo.length > 0 &&
//             listToDo.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {index + 1} - {item.title}
//                   <button onClick={() => this.handleOnDelete(item)}>
//                     Delete
//                   </button>
//                 </div>
//               );
//             })}
//           <button onClick={() => this.handleAdd()}>Add List Todo</button>
//         </div>
//       </>
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
//     addListTodoRedux: () => dispatch({ type: "CREATE_TODO" }),
//     updateListTodoRedux: (todoUpdate) =>
//       dispatch({ type: "UPDATE_LIST_TODO", payload: todoUpdate }),
//   };
// };

// export default connect(mapStateProps, mapDispathToProps)(ListToDo);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo, editTodo } from "../../store/action/Todo";
import AddToDo from "./AddToDo";

function ListToDo(props) {
  const listToDo = useSelector((state) => state.todo.listTodo);
  const checkEdit = useSelector((state) => state.todo.checkEdit);
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    let idRandom = Math.floor(Math.random() * 10000001);
    const newList = {
      id: idRandom,
      title: `random: ${idRandom}`,
    };
    const action = addNewTodo(newList);
    dispatch(action);
  };

  const handleDelete = (todo) => {
    const todoDelete = listToDo.filter((item) => item.id !== todo.id);
    const action = deleteTodo(todoDelete);
    dispatch(action);
  };

  const handleEdit = (todo) => {
    console.log(">>> check edit: ", todo);
    const action = editTodo(todo);
    dispatch(action);
  };
  return (
    <div>
      <h2>List to do - Redux Class</h2>
      <button onClick={handleAddTodo}>Add List Todo</button>
      <AddToDo
        checkEdit={checkEdit}
        listToDo={listToDo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default ListToDo;
