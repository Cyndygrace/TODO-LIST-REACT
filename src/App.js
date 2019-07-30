import React from 'react';
import './App.css';
import TodoList from '../src/Components/TodoList'
import TodoInput from '../src/Components/TodoInput'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h1>hello from app</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
