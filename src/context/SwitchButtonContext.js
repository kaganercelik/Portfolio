import { createContext, useContext, useState } from "react";

const SwitchButtonContext = createContext();

const SwitchButtonProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <SwitchButtonContext.Provider value={{ checked, setChecked }}>
      {children}
    </SwitchButtonContext.Provider>
  );
};

const useSwitchButton = () => {
  const context = useContext(SwitchButtonContext);

  if (!context) {
    throw new Error(
      "useSwitchButton must be used within a SwitchButtonProvider"
    );
  }

  return context;
};

export { SwitchButtonProvider, useSwitchButton };
