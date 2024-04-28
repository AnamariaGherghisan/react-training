import { useContext, useState, createContext } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [profileName, setProfileName] = useState("Bob Smith");

  const value = { profileName, setProfileName };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
