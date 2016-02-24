import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import collageBoardApp from './reducers/index'
import App from './components/App'
import initialState from '../scratchpad/state-structure'

// let initialState = {
// 	imagePanel: {
// 		open: true,
// 		imageLists:[
// 			{
// 				id: 1,
// 				name: 'Imports',
// 				expanded: true,
// 				images: []
// 			},
// 			{
// 				id: 2,
// 				name: 'Cutouts',
// 				expanded: false, 
// 				images: []
// 			}
// 		]
// 	}
// }

let store = createStore(collageBoardApp, initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
