import { render } from 'react-dom'

// Components
import App from './App'

// Styles
import './main.styl'

const startApp = Component => {
	const rootElement = document.querySelector('#root')

	render(<Component />, rootElement)
}

startApp(App)

// webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		startApp(App)
	})
  }