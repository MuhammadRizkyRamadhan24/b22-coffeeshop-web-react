import { combineReducers } from "redux";

import carts from './carts'
import auth from './auth'
import product from './product'
import category from './category'
import transaction from './transaction'
import user from './user'

const reducer = combineReducers({
    carts,
    auth,
    product,
    category,
    transaction,
    user
})

export default reducer