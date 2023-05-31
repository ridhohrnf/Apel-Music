import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  let user = {
    nama: "edoi",
  };
  return <Context.Provider value={user}>{children}</Context.Provider>;
};

export { Context, Provider };
