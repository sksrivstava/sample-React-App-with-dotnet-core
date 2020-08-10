import React from "react";
import { Component } from "react-dom";
import {
  Grid,
  Paper,
  TableContainer,
  table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  withStyles,
} from "@material-ui/core";
import EmployeeForm from "./EmployeeForm";
import DEmployees from "./DEmployees";

const style = (theme) => ({
  root: {
    "& .MuiTableCell-head": { Fontsize: "1.25rem" },
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
});

const Comoncomp = (classes, ...props) => {
  return (
    <paper classes={classes.paper} elevation={1}>
      <grid container>
        <grid item xs={6}>
          <EmployeeForm></EmployeeForm>
        </grid>
        <grid item xs={6}>
          <DEmployees></DEmployees>
        </grid>
      </grid>
    </paper>
  );
};
export default withStyles(style)(Comoncomp);
