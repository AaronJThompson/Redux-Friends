import { combineReducers } from 'redux';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    addingFriend: false,
    updatingFriend: false,
    error: null
}

export function friendsReducer