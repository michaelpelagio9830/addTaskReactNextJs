import React, { memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import * as TaskAction from "../../redux/action/tasks";

const AddTodo = memo((props) => {
  const handleSubmit = (task) => {
    props.setNewTask(task);
    console.log("added task", task);
  };



  const renderForm = (formProps) => {
    const { handleSubmit, form } = formProps;

    console.log(formProps);
    return (
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Grid container alignItems="center" style={{ width: "100%" }}>
          <Grid md={8} item style={{ paddingRight: 16 }}>
            <Field
              name="text"
              render={({ meta, ...fieldProps }) => (
                <TextField
                  {...fieldProps.input}
                  placeholder="Add Todo here"
                  style={{ width: "100%", margin: "20px 0px" }}
             
                  onKeyPress={props.onInputKeyPress}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid md={4} item>
            <Button
      
              type="submit"
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={props.onButtonClick}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <Paper>
      <Grid container style={{ margin: "10px 0px", padding: "16px" }}>
        <Form
          initialValues={{ text: "", checked: false }}
          onSubmit={handleSubmit}
          render={(formProps) => renderForm(formProps)}
        />
      </Grid>
    </Paper>
  );
});
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  setNewTask: (data) => {
    return dispatch(TaskAction.setNewTask(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
