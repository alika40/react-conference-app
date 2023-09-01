import { useEffect, useReducer, useRef } from "react";
import SpeakerReducer from "./SpeakerReducer";
import axios from "axios";
import { actionType } from "./actionType";


const useSpeakerDataManager = () => {
    const isMountRef = useRef(false); //Handles error that occurs when navigates away before the state is set or data is fetched

    const {
            ERRORED,
            FAVORITE,
            UNFAVORITE,
            SPEAKER_LIST,
            FORCE_IMAGE_RERENDER,
            INCREMENT_FAVORITE_CLICK_COUNT
        } = actionType;
        
    const [{error,
            hasError,
            isLoading, 
            speakerList,
            favoriteClickCount,
            imageRerenderIdentifier}, dispatch ] = useReducer(SpeakerReducer, {  isLoading: true,
                                                                            speakerList: [],
                                                                            favoriteClickCount: 0,
                                                                            error: null,
                                                                            hasError: false,
                                                                            imageRerenderIdentifier: 0
                                                                        }
                                                        );

    const incrementFavoriteClickCount = () => dispatch({type: INCREMENT_FAVORITE_CLICK_COUNT});

    const forceImageRerender = () => dispatch({type: FORCE_IMAGE_RERENDER});

    const toggleSpeakerFavorite = (speakerRec) => {
        const updateData = async () => {
            axios.put(`/api/speakers/${speakerRec.id}`, {...speakerRec, favorite: !speakerRec.favorite});
            speakerRec.favorite === true ?
                dispatch({type: UNFAVORITE, id: speakerRec.id}) : 
                dispatch({type: FAVORITE, id: speakerRec.id});
        };
        updateData();
    };

    useEffect(() => {
        isMountRef.current = true;
        //if(isMountRef.current) can also be used to cancell fetch calls when use navigates away immediately without waiting requested data 
        const fetchedData = async () => {
            try {
                let result = await axios.get("/api/speakers");
                if(isMountRef.current) dispatch({ type: SPEAKER_LIST, data: result.data});
            } catch(e) {
                if(isMountRef.current) dispatch({ type: ERRORED, error: e});
            }
        };
        fetchedData();

        return () => isMountRef.current = false;
    }, []);

    return {error,
            hasError,
            isLoading,
            speakerList,
            favoriteClickCount,
            toggleSpeakerFavorite,
            incrementFavoriteClickCount,
            forceImageRerender,
            imageRerenderIdentifier };
};

export default useSpeakerDataManager;