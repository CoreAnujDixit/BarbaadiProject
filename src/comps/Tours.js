import React from "react";
import Card from "./Card";
import "./Tours.css";

function Tours({ tours, removeTour }) {
  return (
    <div className="card">
      {tours.map((tour) => (
        <div key={tour.id}>
          <Card {...tour} removeINT={removeTour} />
        </div>
      ))}
    </div>
  );
}

export default Tours;
