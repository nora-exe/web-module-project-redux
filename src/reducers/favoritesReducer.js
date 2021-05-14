import { TOGGLE_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from './../actions/favoriteActions';

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            }
        case DELETE_FAVORITE:
        return {
            ...state,
            favorites: state.favorites.filter(item => (
                item.id !== action.payload
            ))
        }
        default:
            return state;
    }
}

export default favoritesReducer;