import React, { PropTypes } from 'react'
import ColorPickerOptionsButton from '../../../mixed/ImagePanel/ColorPickerOptionsButton'

const ColorPickerOptions = ({ color }) => {
	return (
		<div className='color-picker-options'>
			<ColorPickerOptionsButton method='EDIT' color={color} />
			<ColorPickerOptionsButton method='BACKGROUND' color={color} />
		</div>
	)
}

export default ColorPickerOptions
