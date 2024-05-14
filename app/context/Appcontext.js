// context.js
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  companies: [],
  fares: [],
  values: {},
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        companies: action.payload.companies,
        fares: action.payload.fares,
        values: action.payload.values,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        companies: [],
        fares: [],
        values: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
