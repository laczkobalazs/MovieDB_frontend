import React, { useState, createContext } from "react";

export const RefreshContext = createContext();

export const RefreshContextProvider = (props) => {
  const [refresh, setRefresh] = useState(1);

  return (
    <RefreshContext.Provider value={[refresh, setRefresh]}>
      {props.children}
    </RefreshContext.Provider>
  );
};
