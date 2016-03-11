import { combineReducers } from 'redux'
import imagePanel from './imagePanel/index'
import collageBoard from './collageBoard/index'
import { TOGGLE_HELP_WINDOW_OPEN } from '../actions'

const helpWindowOpen = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_HELP_WINDOW_OPEN:
			return !state
		default:
			return state
	}
}

const collageBoardApp = combineReducers({
	imagePanel,
	collageBoard,
	helpWindowOpen
})

export default collageBoardApp
