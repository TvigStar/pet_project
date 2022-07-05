import axios from 'axios'

export const cart = {
    getCart: () => {
        return axios.get('http://localhost:5001/cart/')
    },

    // refreshToken: (refreshToken) => {
    //     return axios.post('http://localhost:5001/auth/refresh', { refreshToken })
    // }

    addToCart: ({productId, count}) => {
        return axios.post(`http://localhost:5001/cart/products/${productId}`, {count})
    }
}
