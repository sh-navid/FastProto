import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 1280px;

  @media screen and (min-width: 1024px) and (max-width:1280px) {
    width: 1280px;
  }

  @media screen and (min-width: 800px) and (max-width:1024px) {
    width: 80%;
  }

  @media screen and (min-width: 600px) and (max-width:800px) {
    width: 90%;
  }

  @media screen and (min-width: 0px) and (max-width:600px) {
    width: 100%;
  }
`;
