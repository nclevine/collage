import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_PANEL_OPEN } from '../../actions'
import importPanel from './importPanel'
import imageList from './imageList'
import editor from './editor'

const open = (state = true, action) => {
	switch (action.type) {
		case TOGGLE_IMAGE_PANEL_OPEN:
			return !state
		default:
			return state
	}
}

const imagePanel = combineReducers({
	open,
	importPanel,
	imageList,
	editor
})

export default imagePanel
