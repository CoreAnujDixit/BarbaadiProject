import React, { useState } from "react";

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
          <h4>{price}</h4>
          <h4>{name}</h4>
          <div className="desc">
            {descr}{" "}
            <span onClick={readHandler}>
              {readMore ? `show less` : `Show more`}
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
