import "./App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  });
  return (
    <>
      <h1>Chai Aur Code </h1>
      <p>Jokes: {jokes.length}</p>
      {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
