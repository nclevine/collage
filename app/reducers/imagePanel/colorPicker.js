import { combineReducers } from 'redux'
import { TOGGLE_COLOR_PICKER_OPEN, SET_RED_CHANNEL, SET_GREEN_CHANNEL, SET_BLUE_CHANNEL, SET_ALPHA_CHANNEL } from '../../actions'

const open = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_COLOR_PICKER_OPEN:
			return !state
		default:
			return state
	}
}

const red = (state = 0, action) => {
	switch (action.type) {
		case SET_RED_CHANNEL:
			return action.value
		default:
			return state
	}
}

const green = (state = 0, action) => {
	switch (action.type) {
		case SET_GREEN_CHANNEL:
			return action.value
		default:
			return state
	}
}

const blue = (state = 0, action) => {
	switch (action.type) {
		case SET_BLUE_CHANNEL:
			return action.value
		default:
			return state
	}
}

const alpha = (state = 0, action) => {
	switch (action.type) {
		case SET_ALPHA_CHANNEL:
			return action.value
		default:
			return state
	}
}

const colorPicker = combineReducers({
	open,
	red,
	green,
	blue,
	alpha
})

export default colorPicker
