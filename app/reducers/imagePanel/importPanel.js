import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_IMPORTER_OPEN, ImportMethods, SET_IMAGE_IMPORT_METHOD, REQUEST_SEARCH_IMAGES, RECEIVE_SEARCH_IMAGES, ADD_IMAGE_SEARCH_RESULT, CLEAR_IMAGE_SEARCH_RESULTS } from '../../actions'
const { BY_URL } = ImportMethods

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

const isFetching = (state = false, action) => {
	switch (action.type) {
		case REQUEST_SEARCH_IMAGES:
			return true
		case RECEIVE_SEARCH_IMAGES:
			return false
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
	isFetching,
	results
})

export default importPanel
