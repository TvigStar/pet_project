import './axios.config'

import { auth } from './drivers/auth.driver'
import { cart } from "./drivers/cart.driver";
import { register } from './drivers/register.driver'
import { product} from "./drivers/product.driver";

export const Api = { auth, cart, register, product}
