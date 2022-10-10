import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoList.scss";

function Index() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Hoc React Hook", time: "120p" },
    { id: 2, title: "Hoc Spring boot", time: "220p" },
    { id: 3, title: "Hoc JavaScript", time: "100p" },
  ]);

  // function onSubmit(formValue) {
  //   console.log("form value:", formValue);
  //   const newTodoForm = {
  //     id: Math.random() * 10001,
  //     ...formValue,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodoForm);
  //   setTodoList(newTodoList);
  // }

  // function onSubmit()

  function handleTodoClick(todo) {
    console.log("props:", todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div>
      {/* <TodoForm onSubmit={onSubmit} /> */}
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default Index;
