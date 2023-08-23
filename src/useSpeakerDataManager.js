import { useEffect, useReducer, useContext } from "react";
import speakerReducer from "./SpeakerReducer";
import {InitialSpeakerDataContext} from "../pages/speakers";


const useSpeakerDataManager = () => {
    const initialSpeakerData = useContext(InitialSpeakerDataContext);
    const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: false, speakerList: initialSpeakerData});


    const toggleSpeakerFavorite = (speakerRec) => {
        speakerRec.favorite === true ?
                dispatch({type: "unfavorite", id: speakerRec.id}) : 
                dispatch({type: "favorite", id: speakerRec.id});
    };

    useEffect(() => {

        return () => console.log("Cleanup!!!");
    }, []);

    return {isLoading, speakerList, toggleSpeakerFavorite};
};

export default useSpeakerDataManager;