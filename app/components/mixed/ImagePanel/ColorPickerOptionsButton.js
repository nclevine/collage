import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { importColorToEditor, toggleImageEditorOpen, setCollageBackground } from '../../../actions'

let ColorPickerOptionsButton = ({ method, color, dispatch }) => {
	return (
		<button
			className='color-picker-options-btn'
			onClick={() => {
				if (method === 'EDIT') {
					dispatch(importColorToEditor(color))
					dispatch(toggleImageEditorOpen())
				} else if (method === 'BACKGROUND') {
					dispatch(setCollageBackground(color))
				}
			}}
		>
			{method}
		</button>
	)
}

ColorPickerOptionsButton = connect()(ColorPickerOptionsButton)

export default ColorPickerOptionsButton
