import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { EditorProject, CropPath, exportCrop } from '../presentational/ImagePanel/ImageEditor/PaperGlobalVariables'
import { addCutoutImage, toggleImageEditorOpen } from '../../actions'

let ExportCropButton = ({ dispatch }) => {
	return (
		<button
			className='editor-export-btn'
			onClick={() => {
				let SVGString = exportCrop()
				if (SVGString) {
					dispatch(addCutoutImage(2, SVGString))
					dispatch(toggleImageEditorOpen())
				}
			}}
		>
			Export Cutout
		</button>
	)
}

ExportCropButton = connect()(ExportCropButton)

export default ExportCropButton
