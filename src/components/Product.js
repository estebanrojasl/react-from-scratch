import React from "react";

const Product = (props) => {
  console.log("props:", props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        {props.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        -{props.description}
      </p>
    </div>
  );
};

export default Product;
