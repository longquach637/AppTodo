import React from "react";
import { connect } from "react-redux";
import { getListPost as getListPostAction } from "../../store/action/ListPost";
class App extends React.Component {
  render() {
    const { posts, load } = this.props;

    if (load) {
      return <h1>Data is loading from API...</h1>;
    }
    return (
      <>
        <h1>List Post</h1>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
            {posts &&
              posts.length > 0 &&
              posts.map((post) => (
                <tr>
                  <th>{post.id}</th>
                  <th>{post.title}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }
  componentDidMount() {
    this.props.getListPost();
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.redux.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getListPost: (params) => dispatch(getListPostAction(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
