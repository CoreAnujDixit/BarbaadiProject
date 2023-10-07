import React from "react";
import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <Card {...tour} removeINT={removeTour} />
        </div>
      ))}
    </div>
  );
}

export default Tours;
