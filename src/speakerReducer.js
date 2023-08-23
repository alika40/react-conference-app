
const speakerReducer = (state, action) => {
    const updateFavorite = (favoriteValue) => {
        return state.speakerList.map((item) => {
            if(item.id === action.id) return {...item, favorite: favoriteValue};
            return item;
        });
    };
    
    switch(action.type) {
        case "setSpeakerList": {// Spreads the state and replaces old data with new state, i.e, speakerList and isLoading
            return {...state, speakerList: action.data, isLoading: false};
        }
        case "favorite": {
            return {...state, speakerList: updateFavorite(true)};
        }
        case "unfavorite": {
            return {...state, speakerList: updateFavorite(false)};
        }
        case "incrementFavoriteClickCount": {
            return {...state, favoriteClickCount: state.favoriteClickCount + 1};
        }
        default: return state;
    }
};

export default speakerReducer;