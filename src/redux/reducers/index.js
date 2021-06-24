import { combineReducers } from "redux";

import carts from './carts'
import auth from './auth'
import product from './product'
import category from './category'
import transaction from './transaction'
import user from './user'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistAuth = {
    storage,
    key: 'auth',
}

const reducer = combineReducers({
    carts,
    auth: persistReducer(persistAuth, auth),
    product,
    category,
    transaction,
    user
})

export default reducer