import React from "react";
import { toast } from "react-toastify";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  //chạy hàm này 1 lần duy nhất khi mở form thêm
  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
    }
  }
  // chạy hàm này khi form thêm đang mở, click vào cập nhật thì chuyển về trạng thái cập nhật
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (!nextProps.task) {
      this.state = {
        id: "",
        name: "",
        status: false,
      };
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    if (this.state.name === "") {
      toast.error("Chưa nhập dữ liệu");
      event.preventDefault();
    } else {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.onClear();
      this.onCloseForm();
    }
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    let { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id === "" ? "Thêm công việc" : "Cập nhật"}
            <button
              className="x btn btn-danger"
              onClick={() => this.onCloseForm()}
            >
              x
            </button>
          </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tên: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              ></input>
              <label className="mt-15">Trạng thái: </label>
              <select
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={(event) => this.onChange(event)}
              >
                <option value={true}>Kích hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-warning mr-50"
                  onClick={this.onSubmit}
                >
                  <span className="mr-5">Lưu</span>
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={this.onClear}
                >
                  Hủy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;
