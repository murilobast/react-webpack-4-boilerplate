/* globals API */
import axios from 'axios'
import { handleActions } from 'redux-actions'
import createPromiseAction from 'helpers/createPromiseAction'

// Helpers
import pender from 'helpers/pender'

const EXAMPLE = 'api/EXAMPLE'

const fetchExample = () =>
	axios('/').then(res => res.data)

export const getExample = createPromiseAction({
	type: EXAMPLE,
	promiseCreator: fetchExample
})

const initialState = ({
	pending: {
		getExample: true
	},
	example: {}
})

export default handleActions({
	...pender({
		type: EXAMPLE,
		name: 'getExample',
		onFulfill: (state, { payload }) => ({
			...state,
			example: payload
		})
	})
}, initialState)