import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { importColorToEditor, toggleImageEditorOpen, setCollageBackground } from '../../../actions'
import MakeCutoutIcon from '../../icons/MakeCutoutIcon'
import BackgroundIcon from '../../icons/BackgroundIcon'

let ColorPickerOptionsButton = ({ method, color, dispatch }) => {
	let icon = method === 'EDIT' ?
		<MakeCutoutIcon /> :
		<BackgroundIcon />

	let text = method === 'EDIT' ?
		'Make Cutout' :
		'Set Background'

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
			{icon}
			<p>{text}</p>
		</button>
	)
}

ColorPickerOptionsButton = connect()(ColorPickerOptionsButton)

export default ColorPickerOptionsButton
