import axios from 'axios'

export const product = {
    create: ({ title, description, type, category, price }) => {
        return axios.post('http://localhost:5001/products/create', { title, description, type, category, price })
    }}
