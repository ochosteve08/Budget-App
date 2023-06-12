import {React, useContext} from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../Context/AppContext';
import { toast } from "react-toastify";


const ExpenseItem = ({id,name,cost}) => {

  const {dispatch} = useContext(AppContext);


  const handleDelete=()=>{
    dispatch({
      type: 'DELETE EXPENSE',
      payload: id,

    })
     toast.success("expense successfully deleted", {
       toastId: "delete",
     });
  }

    
  return (
    <li key={id} className="list-group-item  d-flex justify-content-between align-items-center mb-4 ">
      {name}
      <div>
        <span className="badge bg-primary badge-pill m-2 mx-5">${cost}</span>
        <TiDelete className="mx-3" onClick={handleDelete} size={"1.5rem"}></TiDelete>
      </div>
    </li>
    
  );
}

export default ExpenseItem