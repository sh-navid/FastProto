import styled from "styled-components";
import { UserSelectNone } from "./Common";
import React, { Fragment, useEffect } from "react";

const Holder = styled.div`
  top: -10%;
  left: 50%;
  width: 20em;
  padding: 1em;
  display: block;
  position: fixed;
  border-radius: 0.5em;
  transition: top 300ms;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${UserSelectNone}

  @media screen and (max-width: 800px) {
    width: 60% !important;
  }

  @media screen and (max-width: 600px) {
    width: 90% !important;
  }

  &.Active {
    top: 5%;
  }

  & span {
    font-size: 80%;
  }
`;

export const Toast = ({ state }) => {
  const { toast, setToast } = state;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setToast(null);
    }, 4000);
    return () => clearInterval(timeout);
  }, [toast]);

  return (
    <Fragment>
      <Holder
        onClick={() => {
          setToast(null);
        }}
        className={toast == null ? "" : "Active"}
      >
        <span>{toast == null ? "" : toast}</span>
      </Holder>
    </Fragment>
  );
};
