import React from 'react';
import './App.css';
import TodoList from '../src/Components/TodoList'
import TodoInput from '../src/Components/TodoInput'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid'
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4"></div>
        <h3 className="text-capitalize text-center"> todo input </h3>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
