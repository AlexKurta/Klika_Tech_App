import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import ajax from '../middlewares/ajax'

const enhancer = applyMiddleware(ajax)
const store = createStore(reducer, {}, enhancer)

export default store
