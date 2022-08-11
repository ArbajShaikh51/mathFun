import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { MyColors } from "./MyConnect/MyColor";
import { ProductA } from "./MyConnect/ProductA";

export const MyConnect = () => {
  const [data, setData] = useState([]);

  const handleGetEmp = async () => {
    const result = await axios.get("http://localhost:4040/emp");
    setData(result.data);
    console.log(result.data);
  };
  return (
    <React.Fragment>
      <MyColors/>
      <ProductA/>
      <h3>My API connect</h3>
      <Button onClick={handleGetEmp} variant="contained">
        Get Employess
      </Button>

      <Grid container spacing={2}>
        {data.map((item,index) => (
          <Grid item xs={12} key={index} style={{textAlign:"center"}}>
            <b>First Name:</b> {item.fname} <br /> 
            <b>Last Name: </b> {item.lname}<br />
            <b>Age: </b> {item.age}<br />
            <b>City: </b> {item.city}<br />
            <b> Hobby: </b> {item.hobby}<br />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
