import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import Product from "./Product";
import styled from "styled-components";
import { ProductType } from "../shared/shareddtypes";
import { CartContext } from "./CartContext";
import Grid from "@mui/material/Grid";

const ListProducts = () => {
  const { dispatch } = useContext(CartContext);

  const products = useFetch();

  const handleAddToCart = (product: ProductType) => {
    dispatch({
      payload: product,
      type: "ADD",
    });
  };

  return (
    <Grid container spacing={2} sx={{p: 2, m: 0, width: "100vw"}}>
      {products.map((product) => (
        <Grid item xs={6} md={4} lg={3}>
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListProducts;
