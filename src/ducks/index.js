import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

// Ducks
import api from './api'
import promise from './promise'

const rootReducer = combineReducers({
	api, routing, promise
})

export default rootReducer