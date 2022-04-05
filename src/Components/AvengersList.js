import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

function AvengersList(props) {
  return (
    <div>
      {props.avengers.map((avenger) => {
        return (
          <div className="char-card" key={avenger.id}>
            <img src={avenger.thumbnail} alt={avenger.name} />
            <div
              className="avenger-name"
              onClick={() => routeToAvenger(props, avenger)}
            >
              <h2>{avenger.name}</h2>
            </div>
            <p>{avenger.nickname}</p>
          </div>
        );
      })}
    </div>
  );
}

function routeToAvenger(props, avenger) {
  props.history.push(`/avengers/${avenger.id}`);
}

export default AvengersList;
