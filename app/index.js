import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import collageBoardApp from './reducers/index'
import App from './components/App'
import initialState from '../scratchpad/state-structure'

let store = createStore(
	collageBoardApp,
	initialState,
	applyMiddleware(thunkMiddleware)
)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
