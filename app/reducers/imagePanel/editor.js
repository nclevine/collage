import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_EDITOR_OPEN, IMPORT_IMAGE_TO_EDITOR } from '../../actions'

const open = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_IMAGE_EDITOR_OPEN:
			return !state
		default:
			return state
	}
}

const url = (state = null, action) => {
	switch (action.type) {
		case IMPORT_IMAGE_TO_EDITOR:
			return action.url
		default:
			return state
	}
}

const editor = combineReducers({
	open,
	url
})

export default editor
