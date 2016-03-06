import React, { PropTypes } from 'react'
import ColorPickerRange from './ColorPickerRange'

const ColorPickerForm = ({ red, green, blue, alpha, onInputChange }) => {
	return (
		<form className='color-picker-form'>
			<ColorPickerRange
				channel='red'
				value={red}
				onChange={onInputChange}
			/>
			<ColorPickerRange
				channel='green'
				value={green}
				onChange={onInputChange}
			/>
			<ColorPickerRange
				channel='blue'
				value={blue}
				onChange={onInputChange}
			/>
			<ColorPickerRange
				channel='alpha'
				value={alpha}
				onChange={onInputChange}
			/>
		</form>
	)
}

export default ColorPickerForm
