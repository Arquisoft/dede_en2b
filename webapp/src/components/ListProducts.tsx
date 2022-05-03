import React, {useContext} from "react";
import useFetch from "../hooks/useFetch";
import Product from "./Product";
import { CartContext } from "./CartContext";
import { ProductType } from "../shared/shareddtypes";
import Grid from "@mui/material/Grid";

const ListProducts = () => {
  const { dispatch } = useContext(CartContext);

  const search = window.location.search;
  const params = new URLSearchParams(search);


  let filter = params.get('filter')!;

  if(filter !== null){
    filter = filter.toLowerCase();
  }

  let isFiltered = true;

  if(filter == "" || filter === null){
    isFiltered = false;
  }

  let category = params.get('category')!;
  let hasCategory:boolean = false;

  if (category !== null && category.trim().length > 0 && typeof category != undefined ) {
    category = category.toLowerCase();
    hasCategory = true;
  }

  const products = useFetch(category);

  const handleAddToCart = (product: ProductType) => {
    dispatch({
      payload: product,
      type: "ADD",
    });
  };

  if(isFiltered){

    return (
        <Grid container spacing={2} sx={{ px: 2 }}>
          { products.filter( product => product.name.toLowerCase().includes(filter)).map((product) => (
              <Grid item xs={6} md={4} lg={3}>
                <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                />
              </Grid>
          )) }
        </Grid>
    );

  }

  return (
      <Grid container spacing={2} sx={{ px: 2 }}>
        { products.map((product) => (
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
