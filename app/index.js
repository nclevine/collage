import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import collageBoardApp from './reducers/index'
import App from './components/App'
import initialState from '../scratchpad/state-structure'

if (window.chrome) {
	let applicationState = window.localStorage.applicationState ?
		JSON.parse(window.localStorage.applicationState) :
		initialState

	let store = createStore(
		collageBoardApp,
		applicationState,
		applyMiddleware(thunkMiddleware)
	)

	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
} else {
	let message = document.createElement('h1')
	message.innerText = 'Please visit this page using Google Chrome for desktop'
	document.getElementById('root').appendChild(message)
}

