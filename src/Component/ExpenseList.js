import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const Expenses = [
      { id: 1, name: "shopping", cost: 300 },
      { id: 2, name: "eating", cost: 600 },
      { id: 3, name: "tickets", cost: 100 },
    ];

  return (
    <ul className='list-group'>
        {Expenses.map((expense,index)=>{
        let {id,name,cost} = expense;
     return  (
            <ExpenseItem key={index} id={id} name={name} cost={cost} />
      )
        })}
    </ul>
  )
}

export default ExpenseList