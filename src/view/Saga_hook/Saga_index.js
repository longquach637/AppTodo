import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListPost,
  deleteList,
  postList,
  editPost,
} from "../../store/action/ListPost";
import Child1 from "./child1";

function Saga1(props) {
  const { handleClickSaga } = props;
  const listPost = useSelector((state) => state.redux.posts);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState();
  function handleOnGet() {
    const action = getListPost(listPost);
    dispatch(action);
    console.log("actions:", action);
  }

  function handleOnChange(e) {
    setTitle(e.target.value);
  }

  function handleOnPost() {
    const action = postList(title);
    dispatch(action);
  }
  function handleOnDelete(item) {
    const action = deleteList(item);
    dispatch(action);
  }

  function handleOnUpdate(item) {
    setValue(item.tilte);
    setCheck(true);
  }

  function handleOnChangeItem(e) {
    setTitle(e.target.value);
  }

  function handleOnSave(data) {
    console.log("data", data);
    const action = editPost({ data, id: value.id });
    dispatch(action);
  }

  const hanndleClick = (value) => {
    if (handleClickSaga) {
      handleClickSaga(value);
    }
  };
  return (
    <div>
      <button onClick={handleOnGet}>Get List</button>
      <input onChange={handleOnChange}></input>
      <button onClick={handleOnPost}>Post List</button>
      {check && (
        <>
          <input value={value} onChange={handleOnChangeItem}></input>
          <button onClick={() => handleOnSave(value)}>Save</button>
        </>
      )}
      {listPost &&
        listPost.length > 0 &&
        listPost.map((item) => (
          <div key={item.id}>
            {item.id} - {item.tilte}
            <button onClick={() => handleOnDelete(item)}>Delete</button>
            <button onClick={() => handleOnUpdate(item)}>Edit</button>
          </div>
        ))}
      <Child1 onClick={(value) => hanndleClick(value)} />
    </div>
  );
}

export default Saga1;
