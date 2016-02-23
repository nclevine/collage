import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_EDITOR_OPEN, SET_IMAGE_EDITOR_TOOL, IMPORT_IMAGE_TO_EDITOR } from '../../actions'
const LASSO = 'LASSO'

const open = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_IMAGE_EDITOR_OPEN:
			return !state
		default:
			return state
	}
}

const tool = (state = LASSO, action) => {
	switch (action.type) {
		case SET_IMAGE_EDITOR_TOOL:
			return action.tool
		default:
			return state
	}
}

const image = (state = null, action) => {
	switch (action.type) {
		case IMPORT_IMAGE_TO_EDITOR:
			return {
				image: action.image
			}
		default:
			return state
	}
}

const editor = combineReducers({
	open,
	tool,
	image
})

export default editor
