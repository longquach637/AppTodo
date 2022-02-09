import React from "react";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    let { keyword } = this.state;
    return (
      <div className="row mt-15">
        <div className="col-xs-6 col-sm-6 col-md-6 col-mg-6">
          <div className="input-group">
            <input
              name="keyword"
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa"
              value={keyword}
              onChange={(event) => this.onChange(event)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.onSearch()}
              >
                <span className="mr-5">Tìm kiếm</span>
              </button>
            </span>
          </div>
          {/* <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sắp xếp<span className="ml-5"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a role="button" className="sort_selected">
                  <span className="pr5">Tên A - Z</span>
                </a>
              </li>
              <li>
                <a role="button" className="sort_selected">
                  <span className="pr5">Tên Z - A</span>
                </a>
              </li>
              <li>
                <a role="button">Trạng thái kích hoạt</a>
              </li>
              <li>
                <a role="button">Trạng thái ẩn</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Control;
