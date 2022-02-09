import React from "react";
import ChildOfParent from "./ChildOfParent";
import AddComponents from "./AddComponents";

class MyComponents extends React.Component {
  state = {
    arrJob: [
      { id: "001", title: "developer", salary: "500" },
      { id: "002", title: "manager", salary: "1000" },
      { id: "003", title: "tester", salary: "600" },
    ],
  };

  addNewJob = (job) => {
    console.log(">>> check job from parent: ", job);
    let currentJob = this.state.arrJob;
    currentJob.push(job);
    this.setState({
      // ... là toán tử copy hay spread syntax, cụ thể là copy mảng arrJob và thêm phần tử job mới
      //   đây là cách viết nâng cao của cách trên, tương tự như push trong js thuần
      //   arrJob: [...this.state.arrJob, job],
      arrJob: currentJob,
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currentJob,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>>> run did Update: ",
      "prevProps: ",
      prevProps,
      "prevState: ",
      prevState
    );
  }
  componentDidMount() {
    console.log(">>>>> run components did mount !!!!");
  }

  render() {
    return (
      // <> là fragment, lớp bọc vô hình để in ra 2 thẻ div
      <>
        <AddComponents addNewJob={this.addNewJob} />

        <ChildOfParent arrJob={this.state.arrJob} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default MyComponents;
