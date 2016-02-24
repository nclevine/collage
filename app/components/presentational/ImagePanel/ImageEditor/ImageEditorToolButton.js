import React, { PropTypes } from 'react'
import { EditorProject } from './PaperGlobalVariables'
import EditorTools from './PaperEditorTools'

const ImageEditorToolButton = ({ tool }) => {
	let toolActivate = (tool) => {
		if (EditorProject) {
			EditorTools[tool].activate()
		}
	}

	return (
		<button
			className='image-editor-btn'
			onClick={() => {
				toolActivate(tool)
			}}
		>
			{tool}
		</button>
	)
}

ImageEditorToolButton.propTypes = {
	tool: PropTypes.string.isRequired
}

export default ImageEditorToolButton
