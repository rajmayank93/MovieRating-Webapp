import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetMovieRating={setMovieRating}
      />
      <p>This Movie has {movieRating} stars </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating />
    <StarRating
      color="red"
      size="20"
      messages={["Terrible", "BAD", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="pink" size="50" defaultRating={7} />
    <Test /> */}
  </React.StrictMode>
);
