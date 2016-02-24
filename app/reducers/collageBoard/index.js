import { combineReducers } from 'redux'
import { TOGGLE_COLLAGE_BOARD_ACTIVE, TOGGLE_COLLAGE_BOARD_MENU_OPEN, SET_COLLAGE_BACKGROUND, TOGGLE_SELECTED_ELEMENT } from '../../actions'
import elements from './elements'

const active = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_COLLAGE_BOARD_ACTIVE:
			return !state
		default:
			return state
	}
}

const menuOpen = (state = true, action) => {
	switch (action.type) {
		case TOGGLE_COLLAGE_BOARD_MENU_OPEN:
			return !state
		default:
			return state
	}
}

const background = (state = 'white', action) => {
	switch (action.type) {
		case SET_COLLAGE_BACKGROUND:
			return action.id
		default:
			return state
	}
}

const selectedElement = (state = null, action) => {
	switch (action.type) {
		case TOGGLE_SELECTED_ELEMENT:
			return action.id
		default:
			return state
	}
}

const collageBoard = combineReducers({
	active,
	menuOpen,
	background,
	elements,
	selectedElement
})

export default collageBoard
