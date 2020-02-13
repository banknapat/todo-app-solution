import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';
// เรียก Todo มาแสดง
class App extends Component {
  render() {
  return (
    <div>
      <TodoList />
    </div>
  );
}
}

export default App;
