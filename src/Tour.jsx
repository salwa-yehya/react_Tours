//single Tour with his style ..
import React, { useState } from "react";

const Tour = ({ tour }) => {
  const { id, name, info, image, price } = tour;
  const [showmore, setShowmore] = useState(false); // disply show more button as initail value

  return (
    <article className="single-tour" key={id}>
       
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        
          
        </div>
      </footer>

      <p>
        {/* if showmore is true retrun all the info else return only 200index by using subsrting builtin function*/}
        {showmore ? info : `${info.substring(0, 200)}`}
        {/* add button and add onClick function */}
        <button
          onClick={() => {
            setShowmore(!showmore);
          }}
        >
          {showmore ? "show less" : "show more"}
        </button>
      </p>
    </article>
  );
};

export default Tour;
