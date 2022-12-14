import React, { useState, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import axios from "axios";
import { ProductItem } from "./ProductItem";


export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filt, setFilt] = useState([]);
  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setData(result.data);
    setFilt(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <h4>Product List</h4>
      <Grid container spacing={3}>
        {
            filt.map(item=>
            <Grid item xs={3}>
                <ProductItem item={item} />
            </Grid>
            )
        }
      </Grid>
    </React.Fragment>
  );
};
