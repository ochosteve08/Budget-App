import React from "react";

const AddExpense = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm-3">
          <label htmlFor="expense" className="mb-2">
            Name
          </label>
          <input
            name="expense"
            type="text"
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="col-sm-3">
          <label htmlFor="expense" className="mb-2">
            Cost
          </label>
          <input
            name="expense"
            type="text"
            className="form-control"
            id="cost"
            required
          />
        </div>
        <div className="col-8">
          <button type="submit" className="btn btn-primary mt-3">Save</button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
