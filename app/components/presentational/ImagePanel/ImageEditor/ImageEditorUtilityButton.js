import React, { PropTypes } from 'react'
import { EditorProject, CropPath, EditorUtilities } from './PaperGlobalVariables'

const ImageEditorUtilityButton = ({ utility }) => {
	let utilize = (utility) => {
		if (EditorProject) {
			EditorUtilities[utility]()
		}
	}

	return (
		<button
			className='image-editor-btn'
			onClick={() => {
				utilize(utility)
			}}
		>
			{utility}
		</button>
	)
}

ImageEditorUtilityButton.propTypes = {
	utility: PropTypes.string.isRequired
}

export default ImageEditorUtilityButton
