import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const Tables2 = () => {
  const [arr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {arr.map((item) => (
          <Grid item xs={6}>
            <Card>
                <CardContent>
                    <h1>2 X {item} = {item*2}</h1>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
