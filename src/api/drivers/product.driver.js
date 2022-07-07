import axios from 'axios'

export const product = {
    create: ({ title, description, type, stockCount, price }) => {
        return axios.post('http://localhost:5001/products/create', { title, description, type, stockCount, price })
    },
    getAll: () => {
        return axios.get('http://localhost:5001/products/' )
    }
}

