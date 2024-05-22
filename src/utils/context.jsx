import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [StorageAdminUser, setStorageAdminUser] = useLocalStorage(
    "adminUser",
    false
  );
  const [message, setMessage] = useState({
    message: "",
    type: "",
  });
  const [adminUser, setAdminUser] = useState(false);

  return (
    <AppContext.Provider
      value={{
        adminUser,
        StorageAdminUser,
        message,
        setAdminUser,
        setStorageAdminUser,
        setMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
