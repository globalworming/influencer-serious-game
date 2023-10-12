import React, {useState} from 'react';

export const StatsContext = React.createContext(undefined);

function StatsContextBoundary({ children }) {
  const notorietyState = useState(0);
  const popularityState = useState(0);
  const moneyState = useState(0);
  const privateLifeState = useState(0);

  return <StatsContext.Provider value={{
    notorietyState,
    popularityState,
    moneyState,
    privateLifeState,
  }}>{children}</StatsContext.Provider>;
}

export default StatsContextBoundary;
