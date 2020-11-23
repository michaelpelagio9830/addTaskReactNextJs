import React, { Component, useState } from "react";
import { Grid, Card, TextField, makeStyles, Button } from "@material-ui/core";
import { Form, Field, FormSpy } from "react-final-form";
import { connect } from "react-redux";
import _ from "lodash";
import { useRouter } from "next/router";

import clsx from "clsx";

const useStyles = makeStyles({
  title: {
    fontSize: "20px",
  },

});

const Login = ({ credentials }) => {
  const classes = useStyles();
  const router = useRouter();
  const [isAuthentic, setIsAuthentic] = useState(true);

  const handleSubmit = (data) => {
    console.log("this is the data input", data);

    console.log("this is the data input", _.isEqual(credentials, data));
    _.isEqual(credentials, data) ? router.push(`/todo`) : setIsAuthentic(false);

    // return data;
  };

  const renderForm = (formProps) => {
    const { handleSubmit } = formProps;

    return (
      <form onSubmit={handleSubmit}>
        <Grid className={classes.title}>Task App</Grid>
        <Grid item md={12}>
          <Field
            name="userName"
            render={({ meta, ...fieldProps }) => (
              <TextField
                {...fieldProps.input}
                style={{ width: "100%", margin: "20px 0px" }}
                label="user name"
              />
            )}
          />
        </Grid>
        <Grid item md={12}>
          <Field
            name="passWord"
            render={({ meta, ...fieldProps }) => (
              <TextField
                {...fieldProps.input}
                type="password"
                style={{ width: "100%", margin: "20px 0px" }}
                label="user name"
              />
            )}
          />
        </Grid>
        {!isAuthentic && (
          <Grid item style={{ fontSize: "14px", color: "red" }}>
            wrong username or password
          </Grid>
        )}

        <Grid item md={12}>
          <Button
            type="submit"
            style={{ margin: "10px 0px" }}
            variant="contained"
            color="primary"
          >
            submit
          </Button>
        </Grid>
      </form>
    );
  };

  return (
    <Card
      style={{
        width: "600px",
        fontSize: "1rem",
        boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.10)",
        borderRadius: "2em",
        padding: "2em !important",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        render={(formProps) => renderForm(formProps)}
      />
    </Card>
  );
};

const mapStateToProps = (state) => ({
  credentials: state.Login.credentials,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
