import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <img className="logo"
          src="https://pluspng.com/img-png/avengers-logo-png-avengers-logo-png-1376.png"
          alt="Avengers logo"
        />
        <h4>Danger this is classified information!</h4>
        <Link to="/avengers">
          
        
          <img className="comic-pic"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiNNvzOK0CdeSYl-j1UUf5XgBTwj6iqzO_Q&usqp=CAU"
          alt="Avengers comic book"
        />
        </Link>
      </div>
    </>
  );
}

export default Home;
