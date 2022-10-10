import React from "react";
import "./Demo.scss";

class ChildOfParent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(">>> check handleOnClickDelete", job);
    this.props.deleteJob(job);
  };

  render() {
    console.log(">>> check props: ", this.props);
    let { arrJob } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "showJob = true" : "showJob = false";
    return (
      // <> là fragment, lớp bọc vô hình để in ra 2 thẻ div
      <>
        {/* nếu showJob === false thì hiện nut show ngược lại thì hiện nút Hide */}
        {showJob === false ? (
          <div className="btn-Show">
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJob.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      {/* <></> dùng để tạo khoảng trắng */}
                      {item.title} - {item.salary} <></>
                      <span>
                        <button onClick={() => this.handleOnClickDelete(item)}>
                          x
                        </button>
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildOfParent;
