import axios from 'axios'

export const auth = {
    signIn: ({ email, password }) => {
        return axios.post('http://localhost:5001/auth/signin', { email, password })
    },

    refreshToken: (refreshToken) => {
        return axios.post('http://localhost:5001/auth/refresh', { refreshToken })
    },
    logout: () => {
        return axios.post('http://localhost:5001/auth/logout')
    }
}
