import { combineReducers } from 'redux'
import { TOGGLE_IMAGE_PANEL_OPEN } from '../../actions'
import importPanel from './importPanel'
import colorPicker from './colorPicker'
import imageLists from './imageLists'
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
	colorPicker,
	imageLists,
	editor
})

export default imagePanel
