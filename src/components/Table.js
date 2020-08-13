import React, { useState } from "react";

const Table = () => {
  const [items, setItems] = useState("");
  const [arr, setArr] = useState([]);
  const addItems = () => {
    setArr([...arr, items]);
    setItems("");
  };

  const renderItems = () => {
    return arr.map((el, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{el}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h3>To do App</h3>
      <div className='container top-style'>
        <div className='row text-box-container'>
          <div className='col-md-6'>
            <input
              type='text'
              className='form-control'
              value={items}
              onChange={(e) => setItems(e.target.value)}
              placeholder='Enter the todo items'
            />
          </div>
          <div className='col-md-3'>
            <button
              className='btn btn-primary'
              value='Add'
              onClick={() => addItems()}
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Sl No.</th>
                <th scope='col'>Task</th>
              </tr>
            </thead>
            <tbody>{renderItems()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
