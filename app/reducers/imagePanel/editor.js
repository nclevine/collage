import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_EDITOR_OPEN, IMPORT_IMAGE_TO_EDITOR, IMPORT_COLOR_TO_EDITOR } from '../../actions'

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

const editor = combineReducers({
	open,
	image,
	color
})

export default editor
