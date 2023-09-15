import { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <SideBarContext.Provider value={{ show, setShow, handleClick }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
