import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HOME PAGE <Link to="/secondpage">GO TO SECOND PAGE</Link>
    </div>
  );
};

export default HomePage;
