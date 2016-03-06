import React, { PropTypes } from 'react'

const ColorPicker = ({ channel, value, onChange }) => {
	let input
	let max = channel === 'alpha' ? '1' : '256'
	let step = channel === 'alpha' ? '0.01' : '1'
	return (
		<input
			className={channel}
			type='range'
			value={value}
			min='0'
			max={max}
			step={step}
			ref={node => {
				input = node
			}}
			onChange={() => {
				onChange(channel, input.value)
			}}
		/>
	)
}

export default ColorPicker
