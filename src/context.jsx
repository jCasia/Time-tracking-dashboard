import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeId, setActiveId] = useState('Weekly');
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeId,
        setActiveId,
        daily,
        weekly,
        monthly,
        setDaily,
        setWeekly,
        setMonthly,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
