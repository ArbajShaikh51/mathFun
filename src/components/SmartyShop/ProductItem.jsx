import React from "react";
import { Card, CardContent, Grid, Badge, Rating } from "@mui/material";

export const ProductItem = ({item}) => {
  return (
    <React.Fragment>
        <Badge badgeContent={item.price} color="primary">
      <Card sx={{bgcolor: "coral"}}>
        <CardContent>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Rating value={item.rating.rate}/> {item.rating.count}
                </Grid>
                <Grid item xs={12}>
                   <img src={item.image} width="90%" height="200px" />
                </Grid>
                <Grid item xs={12}>
                    <b>{item.title}</b>
                </Grid>
            </Grid>
        </CardContent>
      </Card>
        </Badge>
    </React.Fragment>
  );
};
