import React, { useState } from "react";
import styled from "styled-components";
import notFound from "./../images/notFound.svg";

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  grid-gap: 50px;
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

  #term {
    color: var(--text-secondary);
    font-weight: 500;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

const SubTitle = styled.h4`
  color: var(--text-primary);
  font-weight: 400;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
`;

export default function NotFound({ capitalizedTerm }) {
  return (
    <Wrapper>
      <Img src={notFound} alt="notFound" />
      <Title>
        Sorry, we coulnd't find any movie with the title{" "}
        <span id="term">{capitalizedTerm}</span>.
      </Title>
      <SubTitle>Try something else!</SubTitle>
    </Wrapper>
  );
}
