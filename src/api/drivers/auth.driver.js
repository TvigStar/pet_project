import axios from 'axios'

export const auth = {
    signIn: ({ email, password }) => {
        return axios.post('http://localhost:5001/auth/signin', { email, password })
       // return fetch('http://localhost:5001/auth/signin', {
         //   method: 'POST', body: 123
        //})
    }
}