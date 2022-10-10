import React, { useEffect, useState } from "react";
import useLock from "../../CustomHooks/Lock";

function Lock() {
  const { timeString } = useLock();
  return <div>{timeString}</div>;
}

export default Lock;
