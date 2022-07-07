import axios from "axios";

export const checkout =  {
    create: ({cartId}) => {
return axios.post('http://localhost:5001/checkout/', {cartId})
    }
}