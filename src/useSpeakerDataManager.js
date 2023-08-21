import { useEffect, useReducer } from "react";
import speakerData from "./speakerData";
import speakerReducer from "./SpeakerReducer";
import axios from "axios";


const useSpeakerDataManager = () => {
    const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: true, speakerList: []});

    const toggleSpeakerFavorite = (speakerRec) => {
        const updateData = async () => {
            axios.put(`/api/speakers/${speakerRec.id}`, {...speakerRec, favorite: !speakerRec.favorite});
            speakerRec.favorite === true ?
                dispatch({type: "unfavorite", id: speakerRec.id}) : 
                dispatch({type: "favorite", id: speakerRec.id});
        };
        updateData();
    };

    useEffect(() => {
        // new Promise((resolve) => setTimeout(() => resolve(), 100))
        // .then(() => dispatch({ type: "setSpeakerList", data: speakerData}) );
        const fetchedData = async () => {
            let result = await axios.get("/api/speakers");
            dispatch({ type: "setSpeakerList", data: result.data});
        };
        fetchedData();

        return () => console.log("Cleanup!!!");
    }, []);

    return {isLoading, speakerList, toggleSpeakerFavorite};
};

export default useSpeakerDataManager;