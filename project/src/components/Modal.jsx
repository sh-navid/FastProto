import { Cover } from "./Cover";
import styled from "styled-components";
import React, { Fragment } from "react";
import { UserSelectNone } from "./Common";

const Holder = styled.div`
  top: 50%;
  left: 50%;
  width: 50%;
  padding: 1em;
  display: none;
  z-index: 999999;
  position: fixed;
  min-height: 3em;
  max-height: 95vh;
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
    display: block;
  }

  & span {
    font-size: 80%;
  }
`;

const CloseButton = styled.span`
  top: 0em;
  right: 0.2em;
  padding: 1em;
  cursor: pointer;
  position: absolute;

  &::after {
    content: "✖";
  }
`;

export const Modal = ({ state }) => {
  const { modal, setModal } = state;

  const handleDispose = () => setModal(null);

  return (
    <Fragment>
      {modal && <Cover $zIndex={999998} onClick={handleDispose} />}

      {modal && (
        <Holder className={modal == null ? "" : "Active"}>
          <CloseButton onClick={handleDispose} />
          {modal && modal}
        </Holder>
      )}
    </Fragment>
  );
};
