import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    addingFriend: false,
    updatingFriend: false,
    error: null
}

const loginState = {
    loggingIn: false,
}

export function friendsReducer(state = initialState, action) {
    switch(action.type) {
        case(actionTypes.UPDATING_FRIEND):
            return { ...state, updatingFriend: true };
        case(actionTypes.ADDING_FRIEND):
            return { ...state, addingFriend: true };
        case(actionTypes.DELETING_FRIEND):
            return { ...state, deletingFriend: true };
        case(actionTypes.SET_FRIENDS):
            return { ...state, friends: action.payload };
        case(actionTypes.FETCHING_FRIENDS):
            return { ...state, fetchingFriends: true };
        case(actionTypes.SUCCESS):
            return { 
                ...state, 
                fetchingFriends: false,
                addingFriend: false,
                updatingFriend: false,
                deletingFriend: false,
                error: null,
            };
        case(actionTypes.ERROR):
            return { 
                ...state, 
                fetchingFriends: false,
                addingFriend: false,
                updatingFriend: false,
                deletingFriend: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export function loginReducer(state = loginState, action) {
    switch(action.type) {
        case(actionTypes.LOGGING_IN):
            return { ...state, loggingIn: true };
        case(actionTypes.LOGGING_IN_END):
            return { ...state, loggingIn: false };
        default:
            return state;
    }
}

export default combineReducers({
    friends: friendsReducer,
    login: loginReducer,
});