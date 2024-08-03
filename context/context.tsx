"use client";
import { createContext, ReactNode, useState } from "react";

export const GlobalContext = createContext<any>("");
 function GlobalState({ children }: { children: ReactNode }) {
  const [favoritesList, setFavoritesList] = useState<any>([]);

  function handleAddToFavorite(getCurrentItem:any) {
    console.log("current======",getCurrentItem);
    if (getCurrentItem) {
        
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(
            (item) => item.id === getCurrentItem.id
        );
        
        if (index === -1) {
            cpyFavoritesList.push(getCurrentItem);
        } else {
            cpyFavoritesList.splice(index);
    }
    
    setFavoritesList(cpyFavoritesList);
}
}

  console.log(favoritesList, "favoritesList");
  return (
    <GlobalContext.Provider
      value={{
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;