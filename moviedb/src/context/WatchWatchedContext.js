import React, { useState, createContext } from "react";

export const WatchWatchedContext = createContext();

export const WatchWatchedContextProvider = (props) => {
  const [watchWwatched, setWatchWatched] = useState("watch");

  return (
    <WatchWatchedContext.Provider value={[watchWwatched, setWatchWatched]}>
      {props.children}
    </WatchWatchedContext.Provider>
  );
};
