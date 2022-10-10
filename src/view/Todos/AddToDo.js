// import React from "react";
// import { ToastContainer, toast } from "react-toastify";

// class AddToDo extends React.Component {
//   state = {
//     title: "",
//   };
//   handleAdd = (event) => {
//     this.setState({
//       title: event.target.value,
//     });
//   };

//   handleAddToDo = () => {
//     if (!this.state.title) {
//       toast.error("Missing error");
//       return;
//     }
//     let todo = {
//       id: Math.floor(Math.random() * 1001),
//       title: this.state.title,
//     };
//     this.props.addNewToDo(todo);
//     this.setState({
//       title: "",
//     });
//   };
//   render() {
//     let { title } = this.state;
//     return (
//       <div className="add-todo">
//         <input
//           type="text"
//           value={title}
//           onChange={(event) => {
//             this.handleAdd(event);
//           }}
//         ></input>
//         <button className="btnAdd" onClick={() => this.handleAddToDo()}>
//           Add
//         </button>
//       </div>
//     );
//   }
// }
// export default AddToDo;

import React from "react";
import PropTypes from "prop-types";

AddToDo.propTypes = {
  listToDo: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  checkEdit: PropTypes.bool,
};

AddToDo.defaults = {
  listToDo: [],
  handleDelete: null,
  handleEdit: null,
  checkEdit: null,
};

function AddToDo(props) {
  const { listToDo, handleDelete, handleEdit, checkEdit } = props;
  function handleDeleteDetail(item) {
    if (handleDelete) {
      handleDelete(item);
    }
  }

  function handleEditDetail(item) {
    if (handleEdit) {
      handleEdit(item);
    }
  }
  return (
    <div>
      {listToDo &&
        listToDo.length &&
        listToDo.map((item, index) => {
          return (
            <div key={item.id}>
              {checkEdit === false ? (
                `${index + 1} - ${item.title}`
              ) : (
                <input></input>
              )}

              {"   "}
              <button onClick={() => handleDeleteDetail(item)}>Delete</button>
              <button onClick={() => handleEditDetail(item)}>Edit</button>
            </div>
          );
        })}
    </div>
  );
}

export default AddToDo;
