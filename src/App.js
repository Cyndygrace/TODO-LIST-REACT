import React, {useState} from 'react';
import './App.css';
import TodoList from '../src/Components/TodoList';
import TodoInput from '../src/Components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
function App() {
  // set default state
  const [state, setState] = useState({items: [], id: 0, item:'', editItem: false})

// function to listen and handle changes
const handleChange = e => {
  // changes the value of item from " to whatever is typed"
  setState({
    item: e.target.value
  });
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> todo input </h3>
          {/* pass the attributes as prop to where the component is defined */}
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
