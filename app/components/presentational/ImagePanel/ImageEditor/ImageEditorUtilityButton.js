import React, { PropTypes } from 'react'
import { EditorProject, CropPath, EditorUtilities } from './PaperGlobalVariables'
import CropIcon from '../../../icons/CropIcon'
import ClearPathsIcon from '../../../icons/ClearPathsIcon'

const ImageEditorUtilityButton = ({ utility, cropped, onCropClick }) => {
	let className = (utility === 'TOGGLE_CROP' && cropped) ?
		(cropped ? 'image-editor-btn crop-btn cropped' : 'image-editor-btn crop-btn') :
		'image-editor-btn'	

	let utilize = (utility) => {
		if (EditorProject && EditorProject.activeLayer.getItems({class: paper.Path}).length) {
			EditorUtilities[utility]()
			
			if (utility === 'TOGGLE_CROP' || cropped) {
				onCropClick()
			}
		}
	}

	let utilityIcon

	switch (utility) {
		case 'TOGGLE_CROP':
			utilityIcon = <CropIcon />
			break
		case 'CLEAR_PATHS':
			utilityIcon = <ClearPathsIcon />
			break
	}

	return (
		<button
			className={className}
			onClick={() => {
				utilize(utility)
			}}
		>
			{utilityIcon}
		</button>
	)
}

ImageEditorUtilityButton.propTypes = {
	utility: PropTypes.string.isRequired
}

export default ImageEditorUtilityButton
