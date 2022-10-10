// @flow
import * as React from "react";
import Saga2 from "./Saga2";
import Saga1 from "./Saga_index";
function IndexSaga() {
  const [data, setData] = React.useState("");
  const hanndleClick = (values) => {
    console.log("values11111", values);
    setData(values);
  };
  return (
    <>
      <Saga1 handleClickSaga={(values) => hanndleClick(values)} />
      <Saga2 data={data} />
    </>
  );
}

export default IndexSaga;
