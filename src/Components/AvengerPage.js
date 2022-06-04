import React from "react";
import { Route, Link } from "react-router-dom";
import AvengerDetails from "./AvengerDetails";
import AvengerMovies from "./AvengerMovies";
import "./avengers.css";
import "../styles.css";

function AvengerPage(props) {
  const id = props.match.params.id;
  const avenger = props.avengers.find((avenger) => `${avenger.id}` === id);

  if (!avenger) return <h1>Loading...</h1>;
  return (
    <div className="char-page">
      <h1>Avengers Heros Page</h1>
      <img src={avenger.img} alt={avenger.name} />
      <h2>{avenger.name}</h2>
      <h4>({avenger.nickname})</h4>
      <h3>Films:</h3>
      <Link to={`/avengers/${props.match.params.id}/details`}>
        <h4>Details</h4>
      </Link>{" "}
      <Link to={`/avengers/${props.match.params.id}/movies`}>
        <h4>Movies</h4>
      </Link>
      <Route
        path="/avengers/:id/details"
        render={(props) => <AvengerDetails description={avenger.description} />}
      />
      <Route
        path="/avengers/:id/movies"
        render={(props) => <AvengerMovies movies={avenger.movies} />}
      />
    </div>
  );
}

export default AvengerPage;
