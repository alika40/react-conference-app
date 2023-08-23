import { useEffect, useReducer } from "react";
import speakerReducer from "./SpeakerReducer";
import axios from "axios";


const useSpeakerDataManager = () => {
    const [{isLoading, speakerList, favoriteClickCount }, dispatch] = useReducer(
                                                                speakerReducer,
                                                                {
                                                                    isLoading: true,
                                                                    speakerList: [],
                                                                    favoriteClickCount: 10
                                                                }
                                                            );

    const incrementFavoriteClickCount = () => dispatch({type: "incrementFavoriteClickCount"});

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
        const fetchedData = async () => {
            let result = await axios.get("/api/speakers");
            dispatch({ type: "setSpeakerList", data: result.data});
        };
        fetchedData();

        return () => console.log("Cleanup!!!");
    }, []);

    return {isLoading, speakerList, favoriteClickCount, incrementFavoriteClickCount, toggleSpeakerFavorite};
};

export default useSpeakerDataManager;