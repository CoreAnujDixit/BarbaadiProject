import React, { useState } from "react";
import Tours from "./comps/Tours";
import data from "./comps/data";
import Cards from "./comps/Card";

function App() {
  const [tours, setTours] = useState(data);

  const removeINT = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div>
        <div>Plan with Anuj</div>
      </div>
      <Tours tours={tours} removeTour={removeINT}></Tours>
    </div>
  );
}

export default App;
