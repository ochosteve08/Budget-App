import {React, useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';
import { useState, useEffect } from 'react';

const ExpenseList = () => {

  const {expenses} =useContext(AppContext);
  const [search, setSearch]= useState('');
  const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
      const filteredResult = expenses.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) 
      );

      setSearchResult(filteredResult);
    }, [expenses, search]);
 

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="row mb-4">
          <div className=" d-flex align-items-center gap-4 ">
           
            <input
              type="search"
              className="form-control"
              id="search"
              placeholder="Search Expenses..."
              role="searchbox"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </form>

    
      <ul className="list-group ">
        {searchResult.map((expense, index) => {
          let { id, name, cost } = expense;
          return <ExpenseItem key={index} id={id} name={name} cost={cost} />;
        })}
      </ul>
    </>
  );
}

export default ExpenseList