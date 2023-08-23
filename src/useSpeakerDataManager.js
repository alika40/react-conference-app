import { useEffect, useReducer, useContext } from "react";
import speakerReducer from "./SpeakerReducer";
import axios from "axios";
import {InitialSpeakerDataContext} from "../pages/speakers";
// import speakerData from "./SpeakerData";


const useSpeakerDataManager = () => {
    const initialSpeakerData = useContext(InitialSpeakerDataContext);
    const [{isLoading, speakerList}, dispatch] = useReducer(speakerReducer, {isLoading: false, speakerList: initialSpeakerData});

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