import Counter from './Counter'
import { shallow, mount } from 'enzyme'

describe('Counter component', () => {
	it('Starts with initial value: 0', () => {
		const wrapper = mount(<Counter />)
		const value = wrapper.find('.counter__value').text()
		expect(value).toEqual('0')
	})

	it('Increments the value when the increment button is clicked', () => {
		const wrapper = mount(<Counter />)
		const incrementButton = wrapper.find('.counter__button--increment')
		incrementButton.simulate('click')
		const value = wrapper.find('.counter__value').text()
		expect(value).toEqual('1')
	})

	it('Decrements the value when the decrement button is clicked', () => {
		const wrapper = mount(<Counter />)
		const decrementButton = wrapper.find('.counter__button--decrement')
		decrementButton.simulate('click')
		const value = wrapper.find('.counter__value').text()
		expect(value).toEqual('-1')
	})
})