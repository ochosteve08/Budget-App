import { React, useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editBudget, setEditBudget] = useState(budget);
  const [changeDetail, setChangeDetail] = useState(false);

  const handleEdit = () => {
    setChangeDetail(!changeDetail);
    
    let budget = editBudget;
  

    dispatch({
      type: "EDIT BUDGET",
      payload: budget,
    });
  };

  return (
    <div className="alert alert-secondary  d-flex  align-items-center height">
      <div >
        < >Budget: $</>
       <input
          className="budget "
          type="number"
          value={editBudget}
          disabled={!changeDetail}
          onChange={(event) => setEditBudget(event.target.value)}
        />
      </div>
      <button onClick={handleEdit} type="submit" className="btn btn-primary ">
       {changeDetail? "Save" : "Edit" }
      </button>
    </div>
  );
};

export default Budget;
