import classNames from 'classnames'

// Enhancers
import enhancer from 'enhancers/counter'

const Button = ({ onClick, text }) => (
	<button
		onClick={onClick}
		className={classNames(
			'counter__button',
			`counter__button--${text === '+' ? 'increment' : 'decrement'}`
		)}
	>
		{text}
	</button>
)

const Counter = ({ increment, decrement, value }) => (
	<section className="counter">
		<span className="counter__value">
			{value}
		</span>
		<div className="counter__buttons">
			<Button onClick={decrement} text="-"/>
			<Button onClick={increment} text="+"/>
		</div>
	</section>
)

export default enhancer(Counter)