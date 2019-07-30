import React, {useState} from 'react';
import './App.css';
import TodoList from '../src/Components/TodoList';
import TodoInput from '../src/Components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
function App() {
  // set default state
  const [state, setState] = useState({items: [], id: 0, items:'', editItem: false})
// method to listen to changes in the value
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> todo input </h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
