import { combineReducers } from 'redux'
import { ADD_IMAGE_LIST, REMOVE_IMAGE_LIST, ADD_RAW_IMAGE, ADD_CUTOUT_IMAGE, REMOVE_IMAGE } from '../../actions'

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

const list = (state, action) => {
	switch (action.type) {
		case ADD_IMAGE_LIST:
			return {
				id: action.id,
				name: action.name,
				expanded: false,
				images: []
			}
		case ADD_RAW_IMAGE:
		case ADD_CUTOUT_IMAGE:
			return Object.assign({}, state, {
				images: [
					...state.images,
					image(undefined, action)
				]
			})
		case REMOVE_IMAGE:
			return Object.assign({}, state, {
				images: state.images.filter(image => 
					image.id !== action.imageId
				)
			})
		default:
			return state
	}
}

let initialState = [
	{
		id: 1,
		name: 'Imports',
		expanded: true,
		images: []
	},
	{
		id: 2,
		name: 'Cutouts',
		expanded: false, 
		images: []
	}
]

const imageLists = (state = initialState, action) => {
	switch (action.type) {
		case ADD_IMAGE_LIST:
			return [
				...state,
				list(undefined, action)
			]
		case REMOVE_IMAGE_LIST:
			return state.filter(l => 
				l.listId !== action.listId
			)
		case ADD_RAW_IMAGE:
		case ADD_CUTOUT_IMAGE:
		case REMOVE_IMAGE:
			return state.map(l => 
				if (l.listId !== action.listId) {
					return l
				}
				return list(l, action)
			)

	}
}

export default imageLists
