import React from "react";

const ProductInfo = (props) => {
  return (
    <p>
      {props.product.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
      -{props.product.description}
    </p>
  );
};

export default ProductInfo;
