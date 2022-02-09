import React from "react";
import { toast } from "react-toastify";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, // ẩn: 0; kích hoạt: 1; tất cả: -1
    };
  }
  onDelete = (task) => {
    console.log(">>>> check props task delete: ", task);
    this.props.onDelete(task);
    toast.success("Xóa thành công");
  };
  onUpdateStatus = (task) => {
    console.log(">>>> check props task update status: ", task.id);
    this.props.onUpdateStatus(task.id);
  };

  onUpdate = (task) => {
    console.log(">>>> check props task update status: ", task.id);
    this.props.onUpdate(task.id);
  };

  handlelOnChange = (event) => {
    console.log(">> Check status onChange");
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );

    this.setState({
      [name]: value,
    });
  };
  render() {
    let { task } = this.props;
    let { filterName, filterStatus } = this.state;
    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.handlelOnChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.handlelOnChange}
              >
                <option value={-1}>Tất cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {task &&
            task.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td className="text-center">
                    <button
                      className={
                        item.status === true
                          ? "btn btn-danger"
                          : "btn btn-success"
                      }
                      onClick={() => this.onUpdateStatus(item)}
                    >
                      {item.status === true ? "Kích hoạt" : "Ẩn"}
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => this.onUpdate(item)}
                    >
                      <span className="mr-5">Sửa</span>
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.onDelete(item)}
                    >
                      <span className="mr-5">Xóa</span>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
