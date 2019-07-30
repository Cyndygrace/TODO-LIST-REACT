import React from 'react';
import './App.css';
import TodoList from '../src/Components/TodoList';
import TodoInput from '../src/Components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
function App() {
  // set default state
  // initial state for all items
  [items, setItems] = useState([]);
  // initial state of id before an item is created
  [id, setId] = useState(0);
  // initial state of the item field to be created
  [item, setItem] = useState('');
  //initial state before item is edited
  [editItem, setEditItem] = useState(false);
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
