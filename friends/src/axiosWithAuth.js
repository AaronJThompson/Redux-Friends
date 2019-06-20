import axios from 'axios';

export default function() {
    axios.create({
        headers: {
            Authorization: localStorage.getItem('token') ? localStorage.getItem('token') : 'no_token',
        }
    })
}