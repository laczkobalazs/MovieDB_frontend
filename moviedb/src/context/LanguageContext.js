import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState("hu");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  );
};
