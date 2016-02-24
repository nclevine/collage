import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleImageEditorOpen } from '../../actions'

let ExitEditorButton = ({ dispatch }) => {
	return (
		<button
			className='editor-exit-btn'
			onClick={() => {
				dispatch(toggleImageEditorOpen())
			}}
		>
			Exit Editor
		</button>
	)
}

ExitEditorButton = connect()(ExitEditorButton)

export default ExitEditorButton
