import { applyMiddleware, createStore, combineReducers } from 'redux'
import { localStorageMiddleware, promiseMiddleware } from './middleware'

import home from './reducers/home'
import auth from './reducers/auth'
import common from './reducers/common'

const reducer = combineReducers({ auth, common, home })

const store = createStore(reducer, applyMiddleware(promiseMiddleware, localStorageMiddleware))

export default store