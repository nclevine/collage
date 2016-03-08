import { connect } from 'react-redux'
import ImageEditor from '../presentational/ImagePanel/ImageEditor/ImageEditor'

const mapStateToProps = (state) => {
	let { open, image, color, activeTool } = state.imagePanel.editor
	return {
		open: open,
		image: image,
		color: color,
		activeTool: activeTool
	}
}

const ImageEditorContainer = connect(mapStateToProps)(ImageEditor)

export default ImageEditorContainer
