import React, { PropTypes } from 'react'
import ColorPickerForm from './ColorPickerForm'

const ColorPicker = ({ open, red, green, blue, alpha, onHeaderClick, onInputChange }) => {
	return (
		<div className='color-picker'>
			<h1 onClick={onHeaderClick}>Color Picker</h1>
			<div
				className='color-picker-inner'
				style={{	
					height: open ? 'auto' : 0
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
						backgroundColor: 'rgba(' +
							red + ',' +
							green + ',' +
							blue + ',' +
							alpha + ')'
					}}
				></div>
				<div className='clear'></div>
			</div>
		</div>
	)
}

export default ColorPicker
