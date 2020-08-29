import React from "react";

import Product from "./Product";
import productsData from "../vschoolProducts";

const App = () => {
  const products = productsData.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
  return <div>{products}</div>;
};

export default App;
