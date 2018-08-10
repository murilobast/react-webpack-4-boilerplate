import { Route, IndexRoute } from 'react-router'

// Containers
import App from './containers/App'

const loadRoute = callback => (module) => {
	if (!module) {
		callback()
	} else {
		callback(null, module.default)
	}
}

const errorOnLoadingRoute = error => {
	console.log(error)
	throw new Error('Error on dynamic route loading', error)
}

const routes = (
	<Route
		path={'/'}
		component={App}
	>
		<IndexRoute
			getComponent={(location, cb) => {
				import(/* webpackChunkName: "home" */ './pages/Home')
					.then(loadRoute(cb, null))
					.catch(errorOnLoadingRoute)
			}}
		/>
		<Route
			path={'/about'}
			getComponent={(location, cb) => {
				import(/* webpackChunkName: "about" */ './pages/About')
					.then(loadRoute(cb, null))
					.catch(errorOnLoadingRoute)
			}}
		/>
	</Route>
)

export default routes