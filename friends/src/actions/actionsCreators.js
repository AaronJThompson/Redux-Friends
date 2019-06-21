import axios from 'axios';
import * as types from './actionTypes';
import axiosWithAuth from '../axiosWithAuth';

const APIUrl = 'http://localhost:3000/api/'

export const createAPIUrl = (extension) => `${APIUrl}extension`;

export function setFriends(friends) {
    return {
        type: types.SET_FRIENDS,
        payload: friends,
    }
}

export const fetchFriends = () => dispatch => {
    dispatch({ type: types.FETCHING_FRIENDS });
    axiosWithAuth()
        .get(createAPIUrl('friends'))
        .then(res => {
            dispatch(setFriends(res.data));
            dispatch({ type: types.SUCCESS });
        })
        .catch(error => {
            dispatch({ type: types.ERROR, payload: error.message });
        });
};

export const addFriend = (friend) => dispatch => {
    dispatch({ type: types.ADDING_FRIEND });
    axiosWithAuth()
        .post(createAPIUrl('friends'), friend)
        .then(res => {
            dispatch(setFriends(res.data));
            dispatch({ type: types.SUCCESS });
        })
        .catch(error => {
            dispatch({ type: types.ERROR, payload: error.message });
        });
};

export const updateFriend = (friend) => dispatch => {
    dispatch({ type: types.UPDATING_FRIEND });
    axiosWithAuth()
        .put(createAPIUrl(`friends/${friend.id}`), friend)
        .then(res => {
            dispatch(fetchFriends());
            dispatch({ type: types.SUCCESS });
        })
        .catch(error => {
            dispatch({ type: types.ERROR, payload: error.message });
        });
};

export const deleteFriend = (friend) => dispatch => {
    dispatch({ type: types.DELETING_FRIEND });
    axiosWithAuth()
        .delete(createAPIUrl(`friends/${friend.id}`))
        .then(res => {
            dispatch(fetchFriends());
            dispatch({ type: types.SUCCESS });
        })
        .catch(error => {
            dispatch({ type: types.ERROR, payload: error.message });
        });
};

export const login = (username, password) => dispatch => {
    dispatch({ type: types.LOGGING_IN });
    return axiosWithAuth()
        .post(createAPIUrl(`login`), { username, password })
        .then(res => {
            dispatch(fetchFriends());
            dispatch({ type: types.LOGGING_IN_END });
            localStorage.setItem('token', res.data);
        })
        .catch(error => {
            dispatch({ type: types.ERROR, payload: error.message });
        });
};