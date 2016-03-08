import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_EDITOR_OPEN, IMPORT_IMAGE_TO_EDITOR, IMPORT_COLOR_TO_EDITOR, SET_EDITOR_TOOL, TOGGLE_CROPPED } from '../../actions'

const open = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_IMAGE_EDITOR_OPEN:
			return !state
		default:
			return state
	}
}

const image = (state = null, action) => {
	switch (action.type) {
		case IMPORT_IMAGE_TO_EDITOR:
			return action.image
		default:
			return state
	}
}

const color = (state = null, action) => {
	switch (action.type) {
		case IMPORT_COLOR_TO_EDITOR:
			return action.color
		default:
			return state
	}
}

const activeTool = (state = 'LASSO', action) => {
	switch (action.type) {
		case SET_EDITOR_TOOL:
			return action.tool
		default:
			return state
	}
}

const cropped = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_CROPPED:
			return !state
		default:
			return state
	}
}

const editor = combineReducers({
	open,
	image,
	color,
	activeTool,
	cropped
})

export default editor
