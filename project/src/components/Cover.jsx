import styled from "styled-components";

export const Cover = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: #00000011;
  z-index: ${(x) => x.$zIndex || 0};
`;
