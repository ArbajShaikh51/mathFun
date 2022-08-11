import { DarkModeSharp } from "@mui/icons-material";
import React, { useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/material";

export const ProductA = () => {
  const [data, setData] = useState([]);

  const handleGet = async () => {
    const result = await axios.get("http://localhost:4040/products");
    setData(result.data);
    console.log(result.data);
  };

  return (
    <div>
      <h1>Product with API</h1>
      <button onClick={handleGet}>Get</button>
     
        {data.map((item) => {
          return (
            <div>
              <Grid item xs={4}>
                <img src={item.image} alt="" width={200} />
                <h1>{item.title}</h1>
                <h1>{item.id}</h1>
                <h1>{item.price}</h1>
                <h1>{item.description}</h1>
              </Grid>
            </div>
          );
        })}
     
    </div>
  );
};
