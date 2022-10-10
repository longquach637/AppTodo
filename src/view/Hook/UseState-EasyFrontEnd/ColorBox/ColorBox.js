import React, { useState } from "react";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "red", "yellow", "blue"];
  const ramdomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[ramdomIndex];
}

function ColorBox() {
  //khởi tạo initColor chỉ đc gọi 1 lần
  //lấy màu hiện tại trong localStorage, hoặc chạy lần đầu thì mặc định là green
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "green";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;
