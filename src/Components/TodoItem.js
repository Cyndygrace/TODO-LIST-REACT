import React, {useState} from 'react'

const TodoItem = () => {
  // set default state
  // initial state for all items
[items, setItems] = useState([]);
// initial state of id before an item is created
[id, setId] = useState(0);
// initial state of the item field to be created
[item, setItem] = useState('');
//initial state before item is edited
[editItem, setEditItem] = useState(false)
  return (
   <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
     <h6>Title</h6>
     <div className="todo-icon">
       <span className="mx-2 text-success">
         <i className="fas fa-pen"></i>
       </span>
       <span className="mx-2 text-danger">
         <i className="fas fa-trash"></i>
       </span>
     </div>
   </li>
  )
}


export default TodoItem