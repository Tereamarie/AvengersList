import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img
          className="logo"
          src="https://pluspng.com/img-png/avengers-logo-png-avengers-logo-png-1376.png"
          alt="Avengers logo"
        />
        <h4>Danger this is classified information!</h4>
        <Link
          className="btn btn-outline-light btn-lg"
          role="button"
          to="/avengers"
        >
          ENTER
        </Link>
      </div>
      <div className="home-wrapper">
        <img
          className="home-img"
          src="https://st3.depositphotos.com/2927373/18205/i/450/depositphotos_182059154-stock-photo-prague-czech-republic-january-colorful.jpg"
          alt="Avengers comic book"
        />
      </div>
    </>
  );
}

export default Home;