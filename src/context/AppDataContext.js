import { createContext, useReducer } from "react";
import initialAppContext from "./initialAppContextValue";
import { reducer } from "./AppDataReducer";
export const AppDataContext = createContext();

const AppDataPrivider = ({ children }) => {
  const [data, setData] = useReducer(reducer, initialAppContext);

  return (
    <AppDataContext.Provider value={[data, setData]}>
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataPrivider;
