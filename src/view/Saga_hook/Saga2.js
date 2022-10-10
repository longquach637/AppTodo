// @flow
import * as React from "react";
function Saga2(props) {
  const { data } = props;
  console.log("data", data);
  return <div>{data}</div>;
}

export default Saga2;
