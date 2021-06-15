import React from "react";
import styled from "styled-components";
import cinema from "./../images/cinema.svg";

const Wrapper = styled.section`
  display: grid;
  place-items: center;
`;

const Img = styled.img`
  height: 320px;

  @media screen and (max-width: 1440px) {
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    height: 250px;
  }

  @media screen and (max-width: 425px) {
    height: 200px;
  }

  @media screen and (max-width: 320px) {
    height: 150px;
  }
`;

const Title = styled.h1`
  color: var(--text-primary);
  font-weight: 400;
  font-size: 2.25rem;
  text-align: center;

  @media screen and (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

export default function InitialScreen() {
  return (
    <Wrapper>
      <Img src={cinema} alt="camera" />
      <Title>Search for a movie you like!</Title>
    </Wrapper>
  );
}
