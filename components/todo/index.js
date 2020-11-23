import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, List } from "@material-ui/core";
import AddTodo from "./addTodo";
import TodoListItem from "./listTodo";
import * as TaskAction from "../../redux/action/tasks";

const items = [{ text: "sample", checked: false }];

const TodoTable = (props) => {
  return (
    <Grid item md={6}>
  
      <AddTodo />
      <List>
        {props.items.map((todo, index) => (
          <TodoListItem
            {...todo}
            key={`TodoItem.${index}`}
            divider={index !== items.length - 1}
            onButtonClick={() => props.onItemRemove(index)}

          />
        ))}
      </List>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  items: state.Task.items,
});
const mapDispatchToProps = (dispatch) => ({
  onItemRemove: (index) => {
    return dispatch(TaskAction.onItemRemove(index));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);
