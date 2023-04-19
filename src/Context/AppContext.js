import { createContext, useReducer } from "react";

const initialState = {
  budget: 3000,
  expenses: [
    { id:1, name: "shopping", cost: 40 },
    { id:2,  name: "holiday", cost: 140},
    { id:3, name: "tickets", cost: 100 },
  ],
};

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "EDIT BUDGET":
      return {
        ...state,
        budget: [action.payload],
      };

    case "DELETE EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >{children}</AppContext.Provider>
  );
};


