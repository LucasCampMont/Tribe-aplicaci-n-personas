import { createContext, useContext, useState } from "react";

const MatchContext = createContext<any>(null);

export function MatchProvider({ children }: any) {
  const [likes, setLikes] = useState<any[]>([]);
  const [passes, setPasses] = useState<any[]>([]);
  const [matches, setMatches] = useState<any[]>([]);

  const likeProfile = (profile: any) => {
    setLikes(prev => [...prev, profile]);

    // match falso (simulación)
    if (profile.id % 2 === 0) {
      setMatches(prev => [...prev, profile]);
    }
  };

  const passProfile = (profile: any) => {
    setPasses(prev => [...prev, profile]);
  };

  return (
    <MatchContext.Provider
      value={{
        likes,
        passes,
        matches,
        likeProfile,
        passProfile,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
}

export const useMatch = () => useContext(MatchContext);
