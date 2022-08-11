import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const SquareNum = () => {
  const [num, setNum] = useState(0);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <h2>
            Square of {num} is {num ** 2}
          </h2>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
