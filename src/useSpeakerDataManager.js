import { useEffect, useReducer } from "react";
import speakerData from "./speakerData";
import speakerReducer from "./SpeakerReducer";


const useSpeakerDataManager = () => {
    const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: true, speakerList: []});

    const toggleSpeakerFavorite = (speakerRec) => {
        speakerRec.favorite === true ?
            dispatch({type: "unfavorite", id: speakerRec.id}) : dispatch({type: "favorite", id: speakerRec.id});
    };

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => resolve(), 100);
        })
        .then(() => {
            dispatch({
                type: "setSpeakerList",
                data: speakerData
            });
        });
        return () => console.log("Cleanup!!!");
    }, []);

    return {isLoading, speakerList, toggleSpeakerFavorite};
};

export default useSpeakerDataManager;