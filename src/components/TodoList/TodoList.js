import React, { Component } from "react";
import TodoItem from "../TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done>리엑트 공부하기</TodoItem>
        <TodoItem>스타일링 공부하기</TodoItem>
      </div>
    );
  }
}

export default TodoList;
