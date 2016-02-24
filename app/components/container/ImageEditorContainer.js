import { connect } from 'react-redux'
import ImageEditor from '../presentational/ImagePanel/ImageEditor/ImageEditor'

const mapStateToProps = (state) => {
	return {
		open: state.imagePanel.editor.open,
		url: state.imagePanel.editor.url
	}
}

const ImageEditorContainer = connect(
	mapStateToProps
)(ImageEditor)

export default ImageEditorContainer
