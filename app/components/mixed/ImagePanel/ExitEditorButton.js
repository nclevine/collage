import React from 'react'
import { connect } from 'react-redux'
import { toggleImageEditorOpen, importImageToEditor, importColorToEditor, toggleCropped } from '../../../actions'
import { exitEditor } from '../../presentational/ImagePanel/ImageEditor/PaperGlobalVariables'
import CloseIcon from '../../icons/CloseIcon'

let ExitEditorButton = ({ cropped, dispatch }) => {
	return (
		<button
			className='editor-exit-btn'
			onClick={() => {
				exitEditor()
				dispatch(toggleImageEditorOpen())
				dispatch(importImageToEditor(null))
				dispatch(importColorToEditor(null))
				if (cropped) {
					dispatch(toggleCropped())
				}
			}}
		>
			<CloseIcon />
			<p>Exit</p>
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		cropped: state.imagePanel.editor.cropped
	}
}

ExitEditorButton = connect(mapStateToProps)(ExitEditorButton)

export default ExitEditorButton
