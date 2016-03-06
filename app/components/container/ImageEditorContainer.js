import { connect } from 'react-redux'
import ImageEditor from '../presentational/ImagePanel/ImageEditor/ImageEditor'

const mapStateToProps = (state) => {
	let { open, image, color } = state.imagePanel.editor
	return {
		open: open,
		image: image,
		color: color
	}
}

const ImageEditorContainer = connect(
	mapStateToProps
)(ImageEditor)

export default ImageEditorContainer
