import { combineReducers } from 'redux'
import imagePanel from './imagePanel/index'
import collageBoard from './collageBoard/index'

const collageBoardApp = combineReducers({
	imagePanel,
	collageBoard
})

export default collageBoardApp
