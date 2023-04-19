import {React, useContext} from 'react';
import { AppContext } from '../Context/AppContext';

const Spent = () => {

  const {expenses} = useContext(AppContext);  
  const totalExpenses = expenses.reduce((acc, expense) => acc+expense.cost,0);
 

  return (
   
     <div className="alert alert-primary">
        <span> Total Expenses: ${totalExpenses}</span>
    </div>
  )
}

export default Spent