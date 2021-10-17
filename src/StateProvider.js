import React, { createContext, useContext, useReducer } from "react";

// create store
export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// use state
export const useStateValue = () => useContext(StateContext);
