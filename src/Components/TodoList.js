import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, clearList, handleDelete, handleEdit }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(items);
  }, [items]);
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {/* we map through the items array and pass each item as a prop into the todoItem component */}
      {data.map(item => (
        <TodoItem title={item.title} key={item.id}
        handleDelete={() => handleDelete(item.id)} 
        handleEdit={() => handleEdit(item.id)}/>
      ))}
      <button
        type="submit"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        Clear List
      </button>
    </ul>
  );
};

export default TodoList;
