import React from "react";
import useSpeakerDataManager from "./useSpeakerDataManager";


export const GlobalContext = React.createContext();


export const GlobalProvider = ({children}) => {
    const {
        error,
        hasError,
        isLoading,
        speakerList,
        favoriteClickCount,
        toggleSpeakerFavorite,
        incrementFavoriteClickCount,
        forceImageRerender,
        imageRerenderIdentifier
      } = useSpeakerDataManager();
    
      const provider = {
        error,
        hasError,
        isLoading,
        speakerList,
        favoriteClickCount,
        toggleSpeakerFavorite,
        incrementFavoriteClickCount,
        forceImageRerender,
        imageRerenderIdentifier  
      };

    return (
            <GlobalContext.Provider value={provider}> { children } </GlobalContext.Provider>
            );
};