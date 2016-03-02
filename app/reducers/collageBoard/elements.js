import { combineReducers } from 'redux'
import { ADD_COLLAGE_ELEMENT, REMOVE_COLLAGE_ELEMENT, UPDATE_COLLAGE_ELEMENT } from '../../actions'

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
					top: '10%',
					left: '10%'
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
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			]
		default:
			return state
	}
}

export default elements
