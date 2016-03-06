import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { EditorProject, CropPath, exportCrop } from '../../presentational/ImagePanel/ImageEditor/PaperGlobalVariables'
import { addCutoutImage, toggleImageEditorOpen, importImageToEditor, importColorToEditor } from '../../../actions'

let ExportCropButton = ({ dispatch }) => {
	return (
		<button
			className='editor-export-btn'
			onClick={() => {
				let { SVGString, width, height } = exportCrop()
				if (SVGString) {
					dispatch(addCutoutImage(2, SVGString, width, height))
					dispatch(toggleImageEditorOpen())
					dispatch(importImageToEditor(null))
					dispatch(importColorToEditor(null))
				}
			}}
		>
			Export Cutout
		</button>
	)
}

ExportCropButton = connect()(ExportCropButton)

export default ExportCropButton
