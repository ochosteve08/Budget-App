import {React, useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';

const ExpenseList = () => {

  const {expenses} =useContext(AppContext)
 

  return (
    <ul className='list-group'>
        {expenses.map((expense,index)=>{
        let {id,name,cost} = expense;
     return  (
            <ExpenseItem key={index} id={id} name={name} cost={cost} />
      )
        })}
    </ul>
  )
}

export default ExpenseList