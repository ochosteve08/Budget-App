import { createContext, useReducer } from "react";

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 12, name: "holiday", cost: 140 },
  ],
};

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
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


