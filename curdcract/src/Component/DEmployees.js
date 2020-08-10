import React, { useState, useEffect } from "react";
import { Component } from "react-dom";
import { Connect, connect } from "react-redux";
import * as action from "../Action/dEmploee";
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
//import EmployeeForm from "./EmployeeForm";

const style = (theme) => ({
  root: {
    "& .MuiTableCell-head": { Fontsize: "1.25rem" },
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
});
//const [x,setx]= useState(0);

/* function DEmployee(props) {
  useEffect(() => {
    props.fetchallemployee();
  }, []);
  return <div>From Employee</div>;
} */

const DEmployees = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchallemployee();
  }, []);

  return (
    //<paper classes={classes.paper} elevation={1}>
    <grid container>
      {/* <grid item xs={6}>
          <EmployeeForm></EmployeeForm>
        </grid> */}
      <grid item xs={6}>
        <TableContainer>
          <table>
            <TableHead className={classes.root}>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Mobile</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.demployeeList.map((p, index) => {
                return (
                  <TableRow key={index} hover>
                    <TableCell component="th" scope="row">
                      {p.empid}
                    </TableCell>
                    <TableCell align="right">{p.empname}</TableCell>
                    <TableCell align="right">{p.age}</TableCell>
                    <TableCell align="right">{p.address}</TableCell>
                    <TableCell align="right">{p.mobile}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </table>
        </TableContainer>
      </grid>
    </grid>
    // </paper>
  );
};

const mapStateToProps = (state) => ({ demployeeList: state.dEmployee.list });

const mapActionToProps = {
  fetchallemployee: action.fetchall,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(style)(DEmployees));
