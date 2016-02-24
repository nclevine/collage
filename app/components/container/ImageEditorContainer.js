import { connect } from 'react-redux'
import ImageEditor from '../presentational/ImagePanel/ImageEditor/ImageEditor'

const mapStateToProps = (state) => {
	return {
		open: state.imagePanel.editor.open,
		image: state.imagePanel.editor.image
	}
}

const ImageEditorContainer = connect(
	mapStateToProps
)(ImageEditor)

export default ImageEditorContainer
