import React from 'react'
import {TiDelete} from 'react-icons/ti'

const ExpenseItem = ({id,name,cost}) => {

     console.log(id)
  return (
    <li key={id} className="list-group-item  d-flex justify-content-between align-items-center  ">
      {name}
      <div>
        <span className="badge bg-primary badge-pill m-2 mx-5">{cost}</span>
        <TiDelete className="mx-3" size={"1.5rem"}></TiDelete>
      </div>
    </li>
    
  );
}

export default ExpenseItem