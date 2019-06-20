import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';
const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    addingFriend: false,
    updatingFriend: false,
    error: null
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