import axios from 'axios'

export const register = {
    register: ({ name, email, password }) => {
        return axios.post('http://localhost:5001/users/register', { name, email, password })
    }}
