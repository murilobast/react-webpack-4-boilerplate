import App from './App'
import { shallow } from 'enzyme'

describe('App component', () => {
	it('Renders without exploding', () => {
		const wrapper = shallow(<App />)
	})
})