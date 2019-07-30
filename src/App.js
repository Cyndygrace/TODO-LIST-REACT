import React, { useState } from 'react';
import './App.css';
import TodoList from '../src/Components/TodoList';
import TodoInput from '../src/Components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
function App() {
  // set default state
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  // console.log(state.items);
  // function to listen and handle changes
  const handleChange = e => {
    // changes the value of item from " to whatever is typed"
    setItem(e.target.value);

    // state.item = e.target.value;
    // console.log(state.item);
  };

  // form to capture each event on form submit
  const handleSubmit = e => {
    e.preventDefault();
    // const inputValue = e.target.elements.namedItem('item').value;

    // to create new item
    const newItem = {
      // item properties
      id,
      title: item //the new state of the item
    };

    setItems([...items, newItem]);

    setId(uuid());
    setItem('');
    setEditItem(editItem);

    //with spread operator, we take each existing item in the initail items array and add the new item and return a new array. this way, we do not have a nested array.
    // after submission re-set state
  };
const clearList = () => {
  setItems([])
}

const handleDelete = (id) => {
  // fitlteredItems returns a new array of only items that match the condition
  const filteredItems = items.filter(item => item.id !== id)
  // we set the items array to the new filteredItems array
  setItems(filteredItems)
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> todo input </h3>
          {/* pass the attributes as prop to where the component is defined */}
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList items={items} clearList={clearList}
          handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
