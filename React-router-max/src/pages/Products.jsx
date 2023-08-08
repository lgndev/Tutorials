import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  // we can pretend that this data was fetched from a back end
  const products = [
    { id: "p1", title: "Product-1" },
    { id: "p2", title: "Product-2" },
    { id: "p3", title: "Product-3" },
  ];

  return (
    <>
      <h1>THIS IS THE PRODUCTS PAGE</h1>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
