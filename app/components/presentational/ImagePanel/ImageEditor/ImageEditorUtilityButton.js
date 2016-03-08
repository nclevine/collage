import React, { PropTypes } from 'react'
import { EditorProject, CropPath, EditorUtilities } from './PaperGlobalVariables'
import CropIcon from '../../../icons/CropIcon'
import ClearPathsIcon from '../../../icons/ClearPathsIcon'

const ImageEditorUtilityButton = ({ utility }) => {
	let utilize = (utility) => {
		if (EditorProject) {
			EditorUtilities[utility]()
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
			className='image-editor-btn'
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
