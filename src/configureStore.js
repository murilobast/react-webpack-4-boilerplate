import { browserHistory } from 'react-router'
import promiseWaiter from 'helpers/promiseWaiter'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import { createStore, applyMiddleware, compose } from 'redux'

// Ducks
import rootReducer from './ducks'

// Helpers
import isDev from 'helpers/isDev'

const composeEnhancers = process.browser
	? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
	: compose

// Deserialize the JSON to Immutable
const preloadedState = process.browser && window.__STATE__
	? window.__STATE__
	: undefined

const configureStore = () => {
	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(
				routerMiddleware(browserHistory),
				promiseWaiter,
				promiseMiddleware()
			)
		)
	)

	if (isDev && module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./ducks', () => {
			const nextRootReducer = require('./ducks')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}

export default configureStore