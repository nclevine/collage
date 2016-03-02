import React from 'react'
import { connect } from 'react-redux'
import { toggleImageEditorOpen, importImageToEditor } from '../../../actions'

let ExitEditorButton = ({ dispatch }) => {
	return (
		<button
			className='editor-exit-btn'
			onClick={() => {
				dispatch(toggleImageEditorOpen())
				dispatch(importImageToEditor(null))
			}}
		>
			Exit Editor
		</button>
	)
}

ExitEditorButton = connect()(ExitEditorButton)

export default ExitEditorButton
