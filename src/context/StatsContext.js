import React, {useState} from 'react';

export const StatsContext = React.createContext(undefined);

function StatsContextBoundary({ children }) {
  const fameState = useState(10);
  const followersState = useState(10);

  return <StatsContext.Provider value={{ fameState, followersState }}>{children}</StatsContext.Provider>;
}

export default StatsContextBoundary;
