import React from "react";
import axios from "axios";
import "./listUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(">>>Check respon: ", res);
    // });

    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      ListUser: res && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/users/${user.id}`);
  };
  handleDelete = (item) => {
    console.log(item);
    const newUser = this.state.ListUser.filter((data) => data.id !== item.id);
    console.log(newUser);
    this.setState({
      ...ListUser,
      ListUser: newUser,
    });
  };
  render() {
    let { ListUser } = this.state;
    return (
      <>
        <div className="list-user-container">
          <div className="title">Fetch all list user</div>
          <div className="list-user-content">
            {ListUser &&
              ListUser.length > 0 &&
              ListUser.map((item, index) => {
                return (
                  <div
                    className="child"
                    key={item.id}
                    // onClick={() => this.handleViewDetailUser(item)}
                  >
                    {index + 1} - {item.first_name} {item.last_name}
                    <button onClick={() => this.handleDelete(item)}>X</button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ListUser);
