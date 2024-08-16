import styled from "styled-components";
import React, { useState } from "react";

const Holder = styled.div`
  background-color: tomato;
  color: white;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <Holder>
      <h1>Count: {count}</h1>
      <button onClick={inc}>INC</button>
    </Holder>
  );
};
