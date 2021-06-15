import React from "react";
import MovieList from "./MovieList";
import ResultsTitle from "./ResultsTitle";

export default function Results({ capitalizedTerm, numResults, movies }) {
  return (
    <>
      <ResultsTitle capitalizedTerm={capitalizedTerm} numResults={numResults} />
      <MovieList movies={movies} />
    </>
  );
}
