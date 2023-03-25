import {React, useContext} from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = () => {

  const {budget} = useContext(AppContext);



  return (
    <div className="alert alert-secondary  d-flex justify-content-between align-items-center">
      <span> Budget: ${budget}</span>
      <button type="submit" className="btn btn-primary ">
        Edit
      </button>
    </div>
  );
}

export default Budget