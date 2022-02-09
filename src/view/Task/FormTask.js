import React from "react";
import AddTask from "./AddTask";
import Control from "./Control";
import TaskList from "./TaskList";
import "./Task.scss";
import { toast } from "react-toastify";
import { findIndex } from "lodash";
class FormTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
    };
  }

  componentWillMount() {
    var task = JSON.parse(localStorage.getItem("task"));
    this.setState({
      task: task,
    });
  }

  generateData = () => {
    var task = [
      {
        id: Math.floor(Math.random() * 1000000),
        name: "Học Tiếng Anh",
        status: true,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: "Học ReactJS",
        status: false,
      },
      {
        id: Math.floor(Math.random() * 1000000),
        name: "Học Lập Trình",
        status: true,
      },
    ];
    this.setState({
      task: task,
    });
    localStorage.setItem("task", JSON.stringify(task));
    toast.success("Tạo dữ liệu thành công !!!");
  };
  //hien form
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      //them task
      console.log("th1");
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      //sua task
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onOpenForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  onSubmit = (data) => {
    let { task } = this.state;
    if (data.id === "") {
      //add
      data.id = Math.floor(Math.random() * 1001);
      task.push(data);
      toast.success("Thêm thành công");
    } else {
      //edit
      let index = this.findIndex(data.id);
      task[index] = data;
      toast.success("Sửa thành công");
    }

    this.setState({
      task: task,
      taskEditing: null,
    });
    localStorage.setItem("task", JSON.stringify(task));
  };

  onDelete = (task) => {
    let currentTask = this.state.task;
    currentTask = currentTask.filter((item) => item.id !== task.id);
    this.setState({
      task: currentTask,
    });
    localStorage.setItem("task", JSON.stringify(task));
  };

  onUpdateStatus = (id) => {
    let { task } = this.state;
    //let index = this.findIndex(id);
    //dùng function của lodash để findIndex
    let index = findIndex(task, (task) => {
      return task.id === id;
    });
    if (index !== -1) {
      task[index].status = !task[index].status;
      this.setState({
        task: task,
      });
      localStorage.setItem("task", JSON.stringify(task));
    }
  };

  onUpdate = (id) => {
    let { task } = this.state;
    let index = this.findIndex(id);
    let taskEditing = task[index];
    this.setState({
      taskEditing: taskEditing,
    });
    console.log(">>> check task editing:", taskEditing);
    this.onOpenForm();
  };

  findIndex = (id) => {
    let { task } = this.state;
    let result = -1;
    task.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };

  render() {
    let { task, isDisplayForm, taskEditing, filter, keyword } = this.state;
    if (filter) {
      //filter theo name
      if (filter.name) {
        task = task.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      //filter theo status
      task = task.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    //search
    if (keyword) {
      task = task.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-mg-4"
                : ""
            }
          >
            {isDisplayForm ? (
              <AddTask
                onCloseForm={() => this.onCloseForm()}
                onSubmit={this.onSubmit}
                task={taskEditing}
              />
            ) : (
              ""
            )}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-mg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-mg-12"
            }
          >
            <button type="button" className="btn btn-primary">
              <span className="mr-5" onClick={() => this.onToggleForm()}>
                Thêm công việc
              </span>
            </button>
            <button
              type="button"
              className="btn btn-danger ml-5"
              onClick={() => this.generateData()}
            >
              <span className="mr-5">Tạo dữ liệu</span>
            </button>
            <Control onSearch={this.onSearch} />
            <TaskList
              task={task}
              onDelete={this.onDelete}
              onUpdateStatus={this.onUpdateStatus}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormTask;
