import { compose, withState, withHandlers } from 'recompose'

export default compose(
	withState('value', 'setValue', 0),
	withHandlers({
		increment: ({ value, setValue }) => () => setValue(value + 1),
		decrement: ({ value, setValue }) => () => setValue(value - 1)
	})
)
