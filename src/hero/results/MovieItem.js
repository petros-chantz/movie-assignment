import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 30px 30px;
  grid-template-columns: 250px;
  grid-gap: 10px;
`;

const Photo = styled.div`
  height: 300px;
  border-radius: 4px;
  background-image: url(${(props) => props.moviePoster});
  background-size: cover;
  background-position: center center;
`;

const TitleContainer = styled.div`
  display: grid;
  place-items: center start;
`;

const MovieTitle = styled.p`
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
`;

const BtnContainer = styled.div`
  display: grid;
  place-items: center end;
`;

const Btn = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  color: var(--text-secondary);
`;

export default function MovieItem(props) {
  const { movies } = props;
  return (
    <Wrapper>
      <Photo moviePoster={movies?.Poster}></Photo>
      <TitleContainer>
        <MovieTitle>{movies?.Title}</MovieTitle>
      </TitleContainer>
      <BtnContainer>
        <Btn>Details</Btn>
      </BtnContainer>
    </Wrapper>
  );
}
