import React from 'react'
import { connect } from 'react-redux'
import { toggleImageEditorOpen, importImageToEditor, importColorToEditor } from '../../../actions'
import CloseIcon from '../../icons/CloseIcon'

let ExitEditorButton = ({ dispatch }) => {
	return (
		<button
			className='editor-exit-btn'
			onClick={() => {
				dispatch(toggleImageEditorOpen())
				dispatch(importImageToEditor(null))
				dispatch(importColorToEditor(null))
			}}
		>
			<CloseIcon />
		</button>
	)
}

ExitEditorButton = connect()(ExitEditorButton)

export default ExitEditorButton
