import React, { useContext } from "react";
import TestContext from "../context/testContext/TestContext";

const Dummy = () => {
  const a = useContext(TestContext);
  return (
    <div>
      <strong>
        Dummy <hr />
      </strong>
      This is Inside Use Context {a.name}
    </div>
  )
}

export default Dummy;
