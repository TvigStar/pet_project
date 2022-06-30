import './axios.config'

import { auth } from './drivers/auth.driver'
import { cart } from "./drivers/cart.driver";

export const Api = { auth, cart }
