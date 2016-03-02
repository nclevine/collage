import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_IMPORTER_OPEN, ImportMethods, SET_IMAGE_IMPORT_METHOD, SET_IMAGE_SEARCH_SOURCE, ImageSearchSources, ADD_IMAGE_SEARCH_RESULT, CLEAR_IMAGE_SEARCH_RESULTS } from '../../actions'
const { BY_URL } = ImportMethods
const { ARTSY } = ImageSearchSources

const open = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_IMAGE_IMPORTER_OPEN:
			return !state
		default:
			return state
	}
}

const method = (state = BY_URL, action) => {
	switch (action.type) {
		case SET_IMAGE_IMPORT_METHOD:
			return action.method
		default:
			return state
	}
}

const source = (state = ARTSY, action) => {
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

const results = (state = [], action) => {
	switch (action.type) {
		case ADD_IMAGE_SEARCH_RESULT:
			return [
				...state,
				image(undefined, action)
			]
		case CLEAR_IMAGE_SEARCH_RESULTS:
			return []
		default:
			return state
	}
}

const importPanel = combineReducers({
	open,
	method,
	source,
	results
})

export default importPanel
