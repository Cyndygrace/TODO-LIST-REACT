import React from 'react';

const TodoInput = (props) => {
  const {item, handleChange} = props
  return (
    <div className="card card-body my-3">
      <form>
      <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text bg-primary text-white" >
        <i className="fas fa-book" />
      </div>
    </div>
    {/* by setting value={item}, we are initializing the value of value to the value of state. the handle CHange method is now used to set new value to the value of input value so that the new input value is displayed on the browser when something is typed */}
    <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value={item} 
    />
    </div>
    <button type="submit" className="btn btn-block btn-primary mt-3">add item</button>
     </form>
    </div>
  );
};

export default TodoInput;
