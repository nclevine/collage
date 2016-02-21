import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_IMPORT_PANEL_OPEN, ImportMethods, SET_IMAGE_SEARCH_SOURCE, ImageSearchSources, ADD_IMAGE_SEARCH_RESULT } from '../../actions'
const { BY_URL } from ImportMethods
const { ARTSY } from ImageSearchSources

const open = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_IMAGE_IMPORT_PANEL_OPEN:
			return !state
		default:
			return state
	}
}

const importMethod = (state = BY_URL, action) => {
	switch (action.type) {
		case SET_IMAGE_IMPORT_METHOD:
			return action.method
		default:
			return state
	}
}

const searchSource = (state = ARTSY, action) => {
	switch (action.type) {
		case SET_IMAGE_SEARCH_SOURCE:
			return action.source
		default:
			return state
	}
}

const image = (state, action) => {
	switch (action.type) {
		case ADD_IMAGE_SEARCH_RESULT:
			return {
				id: action.id,
				url: action.url
			}
		default:
			return state
	}
}

const searchResults = (state = [], action) => {
	switch (action.type) {
		case ADD_IMAGE_SEARCH_RESULT:
			return [
				...state,
				image(undefined, action)
			]
		default:
			return state
	}
}

const importPanel = combineReducers({
	open,
	importMethod,
	searchSource,
	searchResults
})

export default importPanel
