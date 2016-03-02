import React, { PropTypes } from 'react'

const ImageImportForm = ({ importMethod, searchSource, onSubmit }) => {
	let input
	let placeholder = importMethod === 'BY_URL' ?
		'Enter image URL' :
		'Search for images on ' + searchSource
	let buttonText = importMethod === 'BY_URL' ?
		'Load' :
		'Search'

	return (
		<form
			className='image-import-form'
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit(input.value)
				input.value = ''
			}}
		>
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

ImageImportForm.propTypes = {
	importMethod: PropTypes.string.isRequired,
	searchSource: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default ImageImportForm
