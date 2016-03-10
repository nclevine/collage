import { combineReducers } from 'redux'
import { ADD_COLLAGE_ELEMENT, REMOVE_COLLAGE_ELEMENT, UPDATE_COLLAGE_ELEMENT, CLEAR_ALL_ELEMENTS } from '../../actions'

const element = (state, action) => {
	switch (action.type) {
		case ADD_COLLAGE_ELEMENT:
			return {
				id: action.id,
				image: action.image,
				dimensions: {
					width: action.image.width,
					height: action.image.height
				},
				position: {
					top: '20%',
					left: '20%'
				}
			}
		case UPDATE_COLLAGE_ELEMENT:
			if (state.id !== action.id) {
				return state
			}
			return Object.assign({}, state, {
				dimensions: action.dimensions,
				position: action.position
			})
		default:
			return state
	}
}

const elements = (state = [], action) => {
	switch (action.type) {
		case ADD_COLLAGE_ELEMENT:
			return [
				...state,
				element(undefined, action)
			]
		case UPDATE_COLLAGE_ELEMENT:
			return state.map(e =>
				element(e, action)
			)
		case REMOVE_COLLAGE_ELEMENT:
			let index
			state.forEach((el, i) => {
				if (el.id === action.id) {
					index = i
				}
			})
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			]
		case CLEAR_ALL_ELEMENTS:
			return []
		default:
			return state
	}
}

export default elements
