import React from "react";
import ProductInfo from "./ProductInfo";

const Product = (props) => {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <ProductInfo product={props.product} />
    </div>
  );
};

export default Product;
