import React, { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext();

// Provider Oluşturma
export const TodoLayer = ({ initialState, reducer, children }) => (
  <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoLayerContext.Provider>
);

export const useTodoValue = () => useContext(TodoLayerContext);
