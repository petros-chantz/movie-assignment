import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  grid-gap: 5px;
`;

const Title = styled.h1`
  color: var(--text-primary);
  font-weight: 400;
  font-size: 2rem;
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
  font-size: 1.2rem;
  text-align: center;

  #num {
    color: var(--text-secondary);
    font-weight: 500;
  }

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
`;

export default function ResultsTitle({ capitalizedTerm, numResults }) {
  return (
    <Wrapper>
      <Title>
        Top 10 movies with the title <span id="term">{capitalizedTerm}</span>
      </Title>
      <SubTitle>
        {" "}
        <span id="num">{numResults}</span> total results
      </SubTitle>
    </Wrapper>
  );
}
