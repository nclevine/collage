import React, { PropTypes } from 'react'
import ColorPickerForm from './ColorPickerForm'
import ColorPickerOptions from './ColorPickerOptions'

const ColorPicker = ({ open, red, green, blue, alpha, onInputChange }) => {
	let colorString = 'rgba(' +
		red + ',' +
		green + ',' +
		blue + ',' +
		alpha + ')'
	return (
		<div
			className='color-picker'
			style={{
				display: open ? 'block' : 'none'
			}}
		>
			<h1>Color Picker</h1>
			<div
				className='color-picker-sample'
				style={{
					backgroundColor: colorString
				}}
			>
				<ColorPickerOptions color={colorString} />
			</div>
			<ColorPickerForm 
				red={red}
				green={green}
				blue={blue}
				alpha={alpha}
				onInputChange={onInputChange}
			/>
			<div className='clear'></div>
		</div>
	)
}

export default ColorPicker
