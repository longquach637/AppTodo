import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const initialValues = {
    title: "",
    time: "",
  };
  const [values, setValues] = useState(initialValues);
  function handleOnChangeValue(e) {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    // const formValue = {
    //   ...values,
    //   [name]: value,
    // };

    onSubmit(values);
    setValues("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Môn học</label> <span></span>
        <input
          type="text"
          value={values.title}
          name="title"
          onChange={handleOnChangeValue}
        ></input>
        <label>Time</label> <span></span>
        <input
          type="text"
          value={values.time}
          name="time"
          onChange={handleOnChangeValue}
        ></input>
        <button onClick={onSubmit}>Save</button>
      </form>
    </div>
  );
}

export default TodoForm;
