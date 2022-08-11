import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { NextNum } from "./Numbers/NextNum";
import { Counter } from "./Numbers/Counter";

export const NumberComp = () => {
  return (
    <Card sx={{ bgcolor: "success.main" }}>
      <CardContent>
        <Counter />
        <Typography variant="h4">Numbers</Typography>
        <NextNum />
      </CardContent>
    </Card>
  );
};
