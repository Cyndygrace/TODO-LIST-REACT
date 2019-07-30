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
};

// form to capture each event on form submit
const handleSubmit = (e) =>{
  e.preventDefault();

// to create new item
const newItem = {
  // item properties
  id: state.id,
  item: state.item //the new state of the item
};
console.log(newItem)
const updatedItems = [...state.items, newItem]; //with spread operator, we take each existing item in the initail items array and add the new item and return a new array. this way, we do not have a nested array.
// after submission re-set state

}

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> todo input </h3>
          {/* pass the attributes as prop to where the component is defined */}
          <TodoInput 
          item={state.item} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
