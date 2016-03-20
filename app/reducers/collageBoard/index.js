import { combineReducers } from 'redux'
import { TOGGLE_COLLAGE_BOARD_ACTIVE, TOGGLE_COLLAGE_BOARD_MENU_OPEN, SET_COLLAGE_BACKGROUND, TOGGLE_SELECTED_ELEMENT, UPDATE_SELECTED_ELEMENT, DESELECT_ALL_ELEMENTS } from '../../actions'
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

const background = (state = '#FFF', action) => {
	switch (action.type) {
		case SET_COLLAGE_BACKGROUND:
			return action.background
		default:
			return state
	}
}

const selectedElements = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_SELECTED_ELEMENT:
			let index = -1
			state.forEach((el, i) => {
				if (el.id === action.element.id) {
					index = i
				}
			})
			if (index > -1) {
				return [
					...state.slice(0, index),
					...state.slice(index + 1)
				]
			} else {
				return [
					...state,
					action.element
				]
			}
		case UPDATE_SELECTED_ELEMENT:
			let newIndex = -1
			state.forEach((el, i) => {
				if (el.id === action.element.id) {
					newIndex = i
				}
			})
			if (newIndex > -1) {
				return [
					...state.slice(0, newIndex),
					...state.slice(newIndex + 1),
					action.element
				]
			} else {
				return state
			}
		case DESELECT_ALL_ELEMENTS:
			return []
		default:
			return state
	}
}

const collageBoard = combineReducers({
	active,
	menuOpen,
	background,
	elements,
	selectedElements
})

export default collageBoard
