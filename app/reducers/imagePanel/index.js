import { combineReducers } from 'redux'
import { SET_IMAGE_PANEL_EXPANSION } from '../../actions'
import importPanel from './importPanel'
import colorPicker from './colorPicker'
import imageLists from './imageLists'
import editor from './editor'

const expansion = (state = 'FULL', action) => {
	switch (action.type) {
		case SET_IMAGE_PANEL_EXPANSION:
			return action.expansion
		default:
			return state
	}
}

const imagePanel = combineReducers({
	expansion,
	importPanel,
	colorPicker,
	imageLists,
	editor
})

export default imagePanel
