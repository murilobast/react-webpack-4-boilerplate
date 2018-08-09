import App from './App'
import { shallow } from 'enzyme'

describe('App component', () => {
	it('Show "It Works!" text', () => {
		const wrapper = shallow(<App />)
		const text = wrapper.find('h1').text()
		expect(text).toEqual('It Works!')
	})
})