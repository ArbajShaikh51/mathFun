import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Tables2 } from "../Tables/Tables2";
import { DynTable } from "../Tables/DynTable";
import { StudentsCards } from "./Geo/StudentsCards";

export const Tables = () => {
  return (
    <Card sx={{ bgcolor: "coral" }}>
      <CardContent>
        <Typography variant="h4">Tables</Typography>
        <StudentsCards />
        <DynTable />
        {/* <Tables2 /> */}
      </CardContent>
    </Card>
  );
};
