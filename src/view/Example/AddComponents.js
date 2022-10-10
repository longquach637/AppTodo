import React from "react";

class AddComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = () => {
    console.log(
      ">>> check output: ",
      "title: ",
      this.state.title,
      ", salary: ",
      this.state.salary
    );
    if (!this.state.title || !this.state.salary) {
      alert("Check message!!!");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 101),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Title Job: </label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJob(event)}
        ></input>
        <br />
        <label htmlFor="lname">Salary: </label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={this.state.salary}
          onChange={(event) => {
            this.handleChangeSalary(event);
          }}
        ></input>
        <br />
        <input
          type="button"
          value="Submit"
          onClick={() => this.handleSubmit()}
        ></input>
      </form>
    );
  }
}

export default AddComponents;
