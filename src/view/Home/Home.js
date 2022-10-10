// import React from "react";
// import { withRouter } from "react-router";
// import logo from "../../assets/images/12.jpg";
// import { connect } from "react-redux";
// import "./Home.scss";

// class Home extends React.Component {
//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.props.history.push("/listToDo");
//   //   }, 3000);
//   // }

//   handleDeleteUser = (user) => {
//     console.log(">>>check user: ", user);
//     this.props.deleteUserRedux(user);
//   };
//   handleCreateUser = () => {
//     this.props.addUserRedux();
//   };

//   handleEditUser = (user) => {
//     this.props.editUserRedux(user);
//   };

//   handleClickDetail = () => {
//     console.log(">>> check detail: ");
//   };
//   render() {
//     console.log(">>>check props redux:", this.props.dataRedux);
//     let listUsers = this.props.dataRedux;
//     return (
//       <>
//         <p>Simple To Do App With Reactjs (Admin &amp; HoiDanIT) </p>
//         <div>
//           {listUsers &&
//             listUsers.length > 0 &&
//             listUsers.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {index + 1} - {item.name}{" "}
//                   <button onClick={() => this.handleDeleteUser(item)}>x</button>
//                 </div>
//               );
//             })}
//           <button onClick={() => this.handleCreateUser()}>Add User</button>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateProps = (state) => {
//   return { dataRedux: state.users };
// };

// const mapDispathToProps = (dispatch) => {
//   return {
//     deleteUserRedux: (userDelete) =>
//       dispatch({ type: "DELETE_USER", payload: userDelete }),
//     addUserRedux: () => dispatch({ type: "CREATE_USER" }),
//     editUserRedux: (userEdit) =>
//       dispatch({ type: "EDIT_USER", payload: userEdit }),
//   };
// };

// export default connect(mapStateProps, mapDispathToProps)(withRouter(Home));

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHome } from "../../store/action/Home";
import User from "./User";

Home.propTypes = {};

function Home() {
  const userList = useSelector((state) => state.home.list);
  const dispatch = useDispatch();
  const handleAddUser = () => {
    //random user object
    let idRandom = Math.floor(Math.random() * 1000);
    const newUser = {
      id: idRandom,
      title: `random ${idRandom}`,
    };
    const action = addNewHome(newUser);
    dispatch(action);
  };

  function* loopRange(from, to) {
    for (let i = from; i <= to; i++) {
      yield i;
    }
    return to + 1;
  }
  const range = loopRange(0, 10);
  for (const i of range) {
    console.log(i);
  }
  return (
    <div>
      <h2>Redux Hook</h2>
      <button onClick={handleAddUser}>Add</button>
      <User userList={userList} />
    </div>
  );
}

export default Home;
