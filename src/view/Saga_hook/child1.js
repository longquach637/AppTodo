// @flow

import * as React from "react";
import Child2 from "./child2";
function Child1(props) {
  const { onClick } = props;
  return (
    <div>
      <Child2 onClickChild2={onClick} />
    </div>
  );
}

export default Child1;
