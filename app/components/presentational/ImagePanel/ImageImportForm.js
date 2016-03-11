import React, { PropTypes } from 'react'

const ImageImportForm = ({ importMethod, onURLSubmit, onSearchSubmit }) => {
	let input
	let placeholder = importMethod === 'BY_URL' ?
		'Enter image URL' :
		'Search for Images'
	let buttonText = importMethod === 'BY_URL' ?
		'Load' :
		'Search'

	return (
		<form
			className='image-import-form'
			onSubmit={(e) => {
				e.preventDefault()
				if (importMethod === 'BY_URL') {
					onURLSubmit(input.value)
				} else {
					onSearchSubmit(input.value)
				}
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
	onURLSubmit: PropTypes.func.isRequired,
	onSearchSubmit: PropTypes.func.isRequired
}

export default ImageImportForm
