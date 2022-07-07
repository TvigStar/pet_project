import axios from 'axios'
import data from "bootstrap/js/src/dom/data";

export const cart = {
    getCart: () => {
        return axios.get('http://localhost:5001/cart/')
    },

    // refreshToken: (refreshToken) => {
    //     return axios.post('http://localhost:5001/auth/refresh', { refreshToken })
    // }

    addToCart: ({productId, count}) => {
        return axios.post(`http://localhost:5001/cart/products/${productId}`, {count})
    },
    deleteCart: ({cartId}) => {
        return axios.delete(`http://localhost:5001/cart/delete/${cartId}`)
    }
}
