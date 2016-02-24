import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import collageBoardApp from './reducers/index'
import App from './components/App'
import initialState from '../scratchpad/state-structure'

let store = createStore(collageBoardApp, initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
