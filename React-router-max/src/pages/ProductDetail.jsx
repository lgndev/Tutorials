import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h1> THIS IS A PRODUCT DETAIL PAGE</h1>
      <div>{params.productId}</div>
    </>
  );
};

export default ProductDetail;
