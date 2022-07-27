import axios from 'axios'

export const cart = {
    getCart: () => {
        return axios.get('http://localhost:5001/cart/')
    },

    deleteProductFromCart: ({productId, count}) => {
        return axios.patch(`http://localhost:5001/cart/products/${productId}`, {count})
    },

    addToCart: ({productId, count}) => {
        return axios.post(`http://localhost:5001/cart/products/${productId}`, {count})
    },
    deleteCart: ({cartId}) => {
        return axios.delete(`http://localhost:5001/cart/${cartId}`)
    }
}
