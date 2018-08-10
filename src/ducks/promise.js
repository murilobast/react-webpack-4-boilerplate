const promiseReducer = (state = [], { type, promise }) => {
	return !process.browser && type === 'AWAIT_PROMISE'
		? state.concat(promise)
		: state
}

export default promiseReducer