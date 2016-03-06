import React, { PropTypes } from 'react'
import ColorPickerForm from './ColorPickerForm'
import ColorPickerOptions from './ColorPickerOptions'

const ColorPicker = ({ open, red, green, blue, alpha, onHeaderClick, onInputChange }) => {
	let colorString = 'rgba(' +
		red + ',' +
		green + ',' +
		blue + ',' +
		alpha + ')'
	return (
		<div className='color-picker'>
			<h1 onClick={onHeaderClick}>Color Picker</h1>
			<div
				className='color-picker-inner'
				style={{	
					height: open ? '300px' : 0
				}}
			>
				<ColorPickerForm 
					red={red}
					green={green}
					blue={blue}
					alpha={alpha}
					onInputChange={onInputChange}
				/>
				<div
					className='color-picker-sample'
					style={{
						backgroundColor: colorString
					}}
				>
					<ColorPickerOptions color={colorString} />
				</div>
				<div className='clear'></div>
			</div>
		</div>
	)
}

export default ColorPicker
