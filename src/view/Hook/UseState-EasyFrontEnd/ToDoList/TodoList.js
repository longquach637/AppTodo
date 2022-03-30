import React from "react";
import PropTypes from "prop-types";
//khởi tạo các props cho hook
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

//nếu todos ko được truyền xuống thì khởi tạo giá trị mặc định là [],
//nếu onTodoClick ko được truyền xuống thì khởi tạo giá trị mặc định là null
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title} {todo.time}
            {/* <button onClick={() => handleClick(todo)}>X</button> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
