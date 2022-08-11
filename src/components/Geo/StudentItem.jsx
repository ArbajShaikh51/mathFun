import React from "react";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import { Card, CardContent, ListItem } from "@mui/material";

export const StudentItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          {item.gender === "male" ? (
            <ManIcon sx={{ fontSize: 100, color: "blue" }} />
          ) : (
            <WomanIcon sx={{ fontSize: 100, color: "red" }} />
          )}
          <h1>{item.fname}</h1>
          <h5>{item.lname}</h5>
          <hr />
          <h3>{item.age} years</h3>
          <h3>{item.gender}</h3>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
