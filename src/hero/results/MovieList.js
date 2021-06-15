import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function MovieList(props) {
  const { movies } = props;

  return (
    <Wrapper>
      {Object.keys(movies).map((id) => {
        return <MovieItem movies={movies[id]} />;
      })}
    </Wrapper>
  );
}
