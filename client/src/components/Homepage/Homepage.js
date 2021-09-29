import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Best Man</h1>
      <h2>Bachelor Party Planner</h2>
      <p>
        Fill out the following pages to generate recommendations based on your
        selections!
      </p>
      <Link to="/where">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Homepage;
