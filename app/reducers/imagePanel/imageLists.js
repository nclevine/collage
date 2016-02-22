import { combineReducers } from 'redux'
import { ADD_RAW_IMAGE, ADD_CUTOUT_IMAGE } from '../../actions'

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

const raw = (state = [], action) => {
	switch (action.type) {
		case ADD_RAW_IMAGE:
			return [
				...state,
				image(undefined, action)
			]
		default:
			return state
	}
}

const cutout = (state = [], action) => {
	switch (action.type) {
		case ADD_CUTOUT_IMAGE:
			return [
				...state,
				image(undefined, action)
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
