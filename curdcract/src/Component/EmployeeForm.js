import React, { useState, useEffect } from "react";
import { Component } from "react-dom";
import { Connect, connect } from "react-redux";
import * as action from "../Action/dEmploee";

import { Grid, TextField, WithStyles, withStyles } from "@material-ui/core";
import useForm from "./useform";

const style = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      minWidth: 260,
    },
  },
  FormControl: {
    margin: theme.spacing(1),
    minwidth: 230,
  },
  smmargin: {
    margin: theme.spacing(1),
  },
});
const initialfieldName = {
  empName: "",
  address: "",
  mobie: "",
  age: "",
};

const EmployeeForm = (classes, ...props) => {
  console.log(props);
  const validate = (fieldvalues = values) => {
    let temp = {};
    if ("empName" in fieldvalues)
      temp.empName = fieldvalues.empName ? "" : "Required";
    if ("mobie" in fieldvalues)
      temp.mobie = fieldvalues.mobie ? "" : "Required";
    if ("age" in fieldvalues) temp.age = fieldvalues.age ? "" : "Required";
    //temp.email = /^$|.+@.+..+/.test(values.email) ? "" : "Invalid Email";

    setErrors({
      ...temp,
    });
    if (fieldvalues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, ChangeValue } = useForm(
    initialfieldName,
    validate
  );
  const handelSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      window.alert(props.sss);
      props.createDEmployee(values, () => {
        window.alert("Added");
      });
      //console.log(props);
    }
  };
  return (
    <form
      autoComplete="off"
      nonValidate
      className={classes.root}
      onSubmit={handelSubmit}
    >
      <Grid container>
        <Grid item xs={3}>
          <TextField
            name="empName"
            variant="outlined"
            label="Emp Name"
            value={values.empName}
            onChange={ChangeValue}
            //error={true}
            // helperText={errors.empName}
            {...(errors.empName && { error: true, helperText: errors.empName })}
          />

          <TextField
            name="address"
            variant="outlined"
            label="Emp Address"
            value={values.address}
            onChange={ChangeValue}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="mobie"
            variant="outlined"
            label="Mobile"
            value={values.mobie}
            onChange={ChangeValue}
            // error={true}
            // helperText={errors.mobie}
            {...(errors.mobie && { error: true, helperText: errors.mobie })}
          />

          <TextField
            name="age"
            variant="outlined"
            label="Age"
            value={values.age}
            onChange={ChangeValue}
            // error={true}
            // helperText={errors.age}
            {...(errors.age && { error: true, helperText: errors.age })}
          />
          <div>
            <button
              variant="ontained"
              color="Primary"
              type="Submit"
              classname={classes.margin}
            >
              submit
            </button>
            <button variant="ontained" classname={classes.margin}>
              Reset
            </button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => ({ demployeeList: state.dEmployee.list });

const mapActionToProps = {
  createDEmployee: action.create,
  sss: "1234",
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(style)(EmployeeForm));
