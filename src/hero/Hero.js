import React from "react";
import styled from "styled-components";
import InitialScreen from "./InitialScreen";
import NotFound from "./NotFound";
import Results from "./results/Results";

const HeroWrapper = styled.div`
  background-color: var(--bg-primary);
  padding: 100px 250px;
  display: grid;
  place-items: center;
  grid-gap: 50px;

  @media screen and (max-width: 1440px) {
    padding: 100px 150px;
  }

  @media screen and (max-width: 1024px) {
    padding: 50px 50px;
  }

  @media screen and (max-width: 425px) {
    padding: 50px 50px;
  }

  @media screen and (max-width: 320px) {
    padding: 50px 20px;
  }
`;

export default function Hero({
  term,
  numResults,
  termExists,
  movies,
  isloading,
}) {
  const capitalizedTerm = term.charAt(0).toUpperCase() + term.slice(1);

  return (
    <HeroWrapper>
      {isloading ? (
        <InitialScreen />
      ) : (
        <Results
          capitalizedTerm={capitalizedTerm}
          numResults={numResults}
          movies={movies}
        />
      )}
    </HeroWrapper>
  );
}
