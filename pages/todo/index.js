import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import TodoTable from "../../components/todo";

const Todo = () => {
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <TodoTable />
    </Grid>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
