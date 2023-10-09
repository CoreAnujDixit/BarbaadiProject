import React, { useState } from "react";
import "./Card.css";

function Card({ id, name, info, image, price, removeINT }) {
  function readHandler() {
    setRead(!readMore);
  }

  const [readMore, setRead] = useState(false);
  const descr = readMore ? info : `${info.substring(0, 100)}....`;

  return (
    <div className="wrapper">
      <div>
        <img src={image} alt="" className="image" />
        <div className="tour-details">
          <h4 className="price">{price}</h4>
          <h4 className="naam">{name}</h4>
          <div className="desc">
            {descr}{" "}
            <span onClick={readHandler}>
              {readMore ? `Show less` : `Show more`}
            </span>
            <div className="btn" onClick={() => removeINT(id)}>
              <button>Not Interested</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
