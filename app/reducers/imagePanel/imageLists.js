import { combineReducers } from 'redux'
import { ADD_RAW_IMAGE, ADD_CUTOUT_IMAGE, REMOVE_RAW_IMAGE, REMOVE_CUTOUT_IMAGE } from '../../actions'

const image = (state, action) => {
	switch (action.type) {
		case ADD_RAW_IMAGE:
			return {
				id: action.id,
				url: action.url
			}
		case ADD_CUTOUT_IMAGE:
			return {
				id: action.id,
				SVGString: action.SVGString
			}
		default:
			return state
	}
}

const raw = (state = {expanded: true, images: []}, action) => {
	switch (action.type) {
		case ADD_RAW_IMAGE:
			return [
				...state,
				image(undefined, action)
			]
		case REMOVE_RAW_IMAGE:
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			]
		default:
			return state
	}
}

const cutout = (state = {expanded: false, images: []}, action) => {
	switch (action.type) {
		case ADD_CUTOUT_IMAGE:
			return [
				...state,
				image(undefined, action)
			]
		case REMOVE_RAW_IMAGE:
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			]
		default:
			return state
	}
}

const imageLists = combineReducers({
	raw,
	cutout
})

export default imageLists
