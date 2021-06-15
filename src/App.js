import React, { useState } from "react";
import "./App.css";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

export default function App() {
  const [isloading, setLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState({});
  const [numResults, setNumResults] = useState(0);
  const [termExists, setTermExists] = useState(true);

  //Hiding API_KEY in an .env file
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://www.omdbapi.com/`;

  function onInputChange(e) {
    setTerm(e.target.value);
  }

  //Fetching data only when submitting term
  function onFormSubmit(e) {
    e.preventDefault();
    fetch(`${url}?s=${term}&apikey=${API_KEY}&`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); //stop loader
        console.log(data); //console log fetched data
        setMovies(data.Search);
        setNumResults(data.totalResults);
        setTermExists(data.Response);
        console.log(termExists);
      })
      .catch((error) => {
        setLoading(false); //stop loader
        console.log(error);
      });
  }

  // if (typeof term === "string") {
  //   //show hero
  // } else {
  //   //show Not a valid term
  // }

  return (
    <>
      <Navbar
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
        term={term}
      />
      <Hero
        term={term}
        numResults={numResults}
        termExists={termExists}
        movies={movies}
        isloading={isloading}
      />
    </>
  );
}
