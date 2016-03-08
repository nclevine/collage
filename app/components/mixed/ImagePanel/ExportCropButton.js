import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { EditorProject, CropPath, exportCrop } from '../../presentational/ImagePanel/ImageEditor/PaperGlobalVariables'
import { addCutoutImage, toggleColorPickerOpen, toggleImageListExpanded, toggleImageEditorOpen, importImageToEditor, importColorToEditor, toggleCropped } from '../../../actions'
import ExportIcon from '../../icons/ExportIcon'

let ExportCropButton = ({ cropped, colorPickerOpen, rawImagesOpen, dispatch }) => {
	return (
		<button
			className='editor-export-btn'
			onClick={() => {
				let cropInfo = exportCrop()
				if (cropInfo && cropInfo.SVGString) {
					dispatch(addCutoutImage(2, cropInfo.SVGString, cropInfo.width, cropInfo.height))
					dispatch(toggleImageEditorOpen())
					if (colorPickerOpen) {
						dispatch(toggleColorPickerOpen())
					} else if (rawImagesOpen) {
						dispatch(toggleImageListExpanded(1))
					}
					dispatch(toggleImageListExpanded(2))
					dispatch(importImageToEditor(null))
					dispatch(importColorToEditor(null))
					dispatch(toggleCropped())
				}
			}}
			disabled={!cropped}
		>
			<ExportIcon />
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		colorPickerOpen: state.imagePanel.colorPicker.open,
		rawImagesOpen: state.imagePanel.imageLists[0].expanded,
		cropped: state.imagePanel.editor.cropped
	}
}

ExportCropButton = connect(mapStateToProps)(ExportCropButton)

export default ExportCropButton
