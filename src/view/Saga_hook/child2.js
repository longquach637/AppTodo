// @flow
import * as React from "react";
function Child2(props) {
  const { onClickChild2 } = props;
  const hanndleClick = () => {
    const randomId = Math.trunc(Math.random() * 1000);
    if (onClickChild2) {
      onClickChild2(randomId);
    }
  };
  return (
    <div>
      <button onClick={hanndleClick}>Click Child 222</button>
    </div>
  );
}

export default Child2;
