import { actionType } from "./actionType";


const SpeakerReducer = (state, action) => {
    const updateFavorite = (favoriteValue) => {
        return state.speakerList.map((item) => {
            if(item.id === action.id) return {...item, favorite: favoriteValue};
            return item;
        });
    };

    const {
            ERRORED,
            FAVORITE,
            UNFAVORITE,
            SPEAKER_LIST,
            FORCE_IMAGE_RERENDER,
            INCREMENT_FAVORITE_CLICK_COUNT
        } = actionType;
    
    switch(action.type) {
        case SPEAKER_LIST: {// Spreads the state and replaces old data with new state, i.e, speakerList and isLoading
            return {...state, speakerList: action.data, isLoading: false, hasError: false};
        }
        case FAVORITE: {
            return {...state, speakerList: updateFavorite(true)};
        }
        case UNFAVORITE: {
            return {...state, speakerList: updateFavorite(false)};
        }
        case INCREMENT_FAVORITE_CLICK_COUNT: {
            return {...state, favoriteClickCount: state.favoriteClickCount + 1};
        }
        case ERRORED: {
            return {...state, hasError: true, error: action.error};
        }
        case FORCE_IMAGE_RERENDER: {
            return {...state, imageRerenderIdentifier: new Date().getTime()};
        }
        default: return state;
    }
};

export default SpeakerReducer;