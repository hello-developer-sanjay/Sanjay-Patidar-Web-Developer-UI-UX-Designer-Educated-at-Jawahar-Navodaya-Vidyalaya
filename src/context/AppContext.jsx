// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

const initialData = {}; // Define your initial data here

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
