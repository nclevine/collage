import React, { PropTypes } from 'react'

const ImageImportForm = ({ importMethod, searchSource }) => {
	let input
	let placeholder = importMethod === 'BY_URL' ?
		'Enter image URL' :
		'Search for images on ' + searchSource
	let buttonText = importMethod === 'BY_URL' ?
		'Load' :
		'Search'

	return (
		<form className='image-import-form'>
			<input
				type='text'
				placeholder={placeholder}
				ref={node => {
					input = node
				}}
			/>
			<button type='submit'>
				{buttonText}
			</button>
		</form>
	)
}

export default ImageImportForm
