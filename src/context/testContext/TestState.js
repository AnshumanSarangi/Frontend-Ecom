import React, { useState } from "react";
import TestContext from "./TestContext";

const TestState = (props) => {
  const [dummy, setDummy] = useState({
    title: "Dr",
    name: "Death",
  });

  const updateState = () => {
    setTimeout(() => {
      setDummy({
        title: "I am",
        name: "Mr Bad Guy",
      });
    }, 2000);
  };
  return (
    <TestContext.Provider value={{ dummy: dummy, updateState: updateState }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
